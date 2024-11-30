const axios = require('axios');

const CLIENT_ID = "1032287561641-20eg7od3e2ldfdei5kkrgs0663h62jv8.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "http://localhost:3000/auth/callback";
const TOKEN_URL = "https://oauth2.googleapis.com/token";

async function getToken(code) {
  try {
    const response = await axios.post(
      TOKEN_URL,
      {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: code,
        grant_type: "authorization_code",
        redirect_uri: REDIRECT_URI
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Erro ao obter o token:", error.response ? error.response.data : error.message);
    throw error;
  }
}

async function getUserProfile(token) {
  try {
    const response = await axios.get("https://www.googleapis.com/oauth2/v1/userinfo", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log("Perfil do usuário:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter o perfil do usuário:", error.response ? error.response.data : error.message);
    throw error;
  }
}

module.exports = {
  getToken,
  getUserProfile
};