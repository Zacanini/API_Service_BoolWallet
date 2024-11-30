const Dividendo = require('../../models/Dividendo');

// Função para listar todos os dividendos
async function getAllDividendos() {
    return await Dividendo.findAll();
}

// Função para buscar um dividendo pelo ID
async function getDividendoById(id) {
    return await Dividendo.findByPk(id);
}

// Função para criar um novo dividendo
async function createDividendo(id_carteira, id_ativo, valor_dividendo, data_pagamento) {
    return await Dividendo.create({ id_carteira, id_ativo, valor_dividendo, data_pagamento });
}

// Função para atualizar um dividendo pelo ID
async function updateDividendo(id, dadosAtualizados) {
    const dividendo = await Dividendo.findByPk(id);
    if (dividendo) {
        return await dividendo.update(dadosAtualizados);
    }
    return null;
}

// Função para deletar um dividendo pelo ID
async function deleteDividendo(id) {
    const dividendo = await Dividendo.findByPk(id);
    if (dividendo) {
        await dividendo.destroy();
        return dividendo;
    }
    return null;
}

module.exports = {
    getAllDividendos,
    getDividendoById,
    createDividendo,
    updateDividendo,
    deleteDividendo
};
