// src/services/historicoRentabilidadeService.js
const HistoricoRentabilidade = require('../../models/HistoricoRentabilidade');

// Função para listar todo o histórico de rentabilidade
async function getAllHistoricoRentabilidade() {
    return await HistoricoRentabilidade.findAll();
}

// Função para buscar uma rentabilidade pelo ID
async function getHistoricoRentabilidadeById(id) {
    return await HistoricoRentabilidade.findByPk(id);
}

// Função para criar um novo histórico de rentabilidade
async function createHistoricoRentabilidade(id_carteira, data_calculo, rentabilidade) {
    return await HistoricoRentabilidade.create({ id_carteira, data_calculo, rentabilidade });
}

// Função para atualizar um histórico de rentabilidade pelo ID
async function updateHistoricoRentabilidade(id, dadosAtualizados) {
    const historico = await HistoricoRentabilidade.findByPk(id);
    if (historico) {
        return await historico.update(dadosAtualizados);
    }
    return null;
}

// Função para deletar um histórico de rentabilidade pelo ID
async function deleteHistoricoRentabilidade(id) {
    const historico = await HistoricoRentabilidade.findByPk(id);
    if (historico) {
        await historico.destroy();
        return historico;
    }
    return null;
}

module.exports = {
    getAllHistoricoRentabilidade,
    getHistoricoRentabilidadeById,
    createHistoricoRentabilidade,
    updateHistoricoRentabilidade,
    deleteHistoricoRentabilidade
};
