// src/services/carteiraAtivoService.js
const CarteiraAtivo = require('../../models/CarteiraAtivo');

// Função para listar todas as relações de ativos em carteiras
async function getAllCarteiraAtivos() {
    return await CarteiraAtivo.findAll();
}

// Função para buscar uma relação de ativo em carteira pelo ID
async function getCarteiraAtivoById(id) {
    return await CarteiraAtivo.findByPk(id);
}

// Função para criar uma nova relação de ativo em carteira
async function createCarteiraAtivo(id_carteira, id_ativo, quantidade, valor_medio, data_aquisicao) {
    return await CarteiraAtivo.create({ id_carteira, id_ativo, quantidade, valor_medio, data_aquisicao });
}

// Função para atualizar uma relação de ativo em carteira pelo ID
async function updateCarteiraAtivo(id, dadosAtualizados) {
    const carteiraAtivo = await CarteiraAtivo.findByPk(id);
    if (carteiraAtivo) {
        return await carteiraAtivo.update(dadosAtualizados);
    }
    return null;
}

// Função para deletar uma relação de ativo em carteira pelo ID
async function deleteCarteiraAtivo(id) {
    const carteiraAtivo = await CarteiraAtivo.findByPk(id);
    if (carteiraAtivo) {
        await carteiraAtivo.destroy();
        return carteiraAtivo;
    }
    return null;
}

module.exports = {
    getAllCarteiraAtivos,
    getCarteiraAtivoById,
    createCarteiraAtivo,
    updateCarteiraAtivo,
    deleteCarteiraAtivo
};
