
const Carteira  = require('../../models/Carteira');

// Função para listar todas as carteiras
async function getAllCarteiras() {
    return await Carteira.findAll();
}

// Função para buscar uma carteira pelo ID
async function getCarteiraById(id) {
    return await Carteira.findByPk(id);
}

// Função para criar uma nova carteira
async function createCarteira(id_usuario, id_carteira, saldo_disponivel, data_ultima_atualizacao) {
    return await Carteira.create({ id_usuario, id_carteira, saldo_disponivel, data_ultima_atualizacao });
}

// Função para atualizar uma carteira pelo ID
async function updateCarteira(id, dadosAtualizados) {
    const carteira = await Carteira.findByPk(id);
    if (carteira) {
        return await carteira.update(dadosAtualizados);
    }
    return null;
}

// Função para deletar uma carteira pelo ID
async function deleteCarteira(id) {
    const carteira = await Carteira.findByPk(id);
    if (carteira) {
        await carteira.destroy();
        return carteira;
    }
    return null;
}

module.exports = {
    getAllCarteiras,
    getCarteiraById,
    createCarteira,
    updateCarteira,
    deleteCarteira
};
