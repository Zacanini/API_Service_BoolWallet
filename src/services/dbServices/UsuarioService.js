const Usuarios = require('../../models/Usuario');
const Carteira = require('../../models/Carteira');
const HistoricoRentabilidade = require('../../models/HistoricoRentabilidade');


// Função para listar todos os usuários
async function getAllUsers() {
    return await Usuarios.findAll();
}

// Função para buscar um usuário pelo ID
async function getUserById(id) {
    return await Usuarios.findByPk(id);
}

// Função para criar um novo usuário
async function createUser(nome, email, senha, githubId, avatar_url) {
    const usuario = await Usuarios.create({ nome, email, senha, githubId, avatar_url });

    // Criar uma carteira para o usuário
    const carteira = await Carteira.create({
        id_usuario: usuario.id_usuario,
        id_carteira: usuario.id_usuario,
        saldo_disponivel: 0.0,
        data_ultima_atualizacao: new Date()
    });

    // Criar um histórico de rentabilidade para a carteira do usuário
    await HistoricoRentabilidade.create({
        id_carteira: carteira.id_carteira,
        data_calculo: new Date(),
        rentabilidade: 0.0
    });


    return usuario;
}

// Função para atualizar um usuário pelo ID
async function updateUser(id, dadosAtualizados) {
    const usuario = await Usuarios.findByPk(id);
    if (usuario) {
        return await usuario.update(dadosAtualizados);
    }
    return null;
}

// Função para deletar um usuário pelo ID
async function deleteUser(id) {
    const usuario = await Usuarios.findByPk(id);
    if (usuario) {
        await usuario.destroy();
        return usuario;
    }
    return null;
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};