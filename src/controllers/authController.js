const authService = require('../services/authService');
const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');

const CLIENT_ID = "1032287561641-20eg7od3e2ldfdei5kkrgs0663h62jv8.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "http://localhost:3000/auth/callback";
const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const SCOPES = [
  "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/userinfo.email"
];
const JWT_SECRET = "tr4b4lh0_we6_5erv1ce"; 

function login(req, res) {
  const authURL = `${GOOGLE_AUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${encodeURIComponent(SCOPES.join(" "))}&access_type=offline`;
  res.redirect(authURL);
}

async function callback(req, res) {
  const code = req.body.code;
  
  if (!code) {
    return res.status(400).send("Código de autorização não encontrado.");
  }

  try {
    const token = await authService.getToken(code);
    console.log("Token recebido:", token);

    const profile = await authService.getUserProfile(token);
    console.log("Perfil do usuário recebido:", profile);

    // Verificar se o usuário já está cadastrado
    let usuario = await Usuario.findOne({ where: { email: profile.email } });

    if (!usuario) {
      // Se o usuário não estiver cadastrado, cadastrar
      usuario = await Usuario.create({
        nome: profile.name,
        email: profile.email,
        senha: '',
        githubId: profile.id, // Armazenando o ID do Google na coluna githubId
        avatar_url: profile.picture
      });
      console.log("Usuário cadastrado:", usuario);
    } else {
      console.log("Usuário já cadastrado:", usuario);
    }

    // Gerar o token JWT
    const jwtToken = jwt.sign({ id: usuario.id_usuario, email: usuario.email }, JWT_SECRET, { expiresIn: '1h' });

    // Retornar o token JWT na resposta
    res.json({ token: jwtToken });

  } catch (error) {
    console.error("Erro ao obter token ou perfil do usuário:", error);
    res.status(500).json({ error: "Erro ao obter token ou perfil do usuário", details: error.message });
  }
}

module.exports = {
  login,
  callback
};