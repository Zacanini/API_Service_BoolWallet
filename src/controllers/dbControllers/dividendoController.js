const { getAllDividendos, getDividendoById, createDividendo, updateDividendo, deleteDividendo } = require('../../services/dbServices/dividendoService');

// Listar todos os dividendos
async function listDividendos(req, res) {
    try {
        const dividendos = await getAllDividendos();
        res.json(dividendos);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar dados');
    }
}

// Buscar um dividendo pelo ID
async function getDividendo(req, res) {
    const { id } = req.params;
    try {
        const dividendo = await getDividendoById(id);
        if (!dividendo) {
            res.status(404).send('Dividendo não encontrado');
        } else {
            res.json(dividendo);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar dados');
    }
}

// Criar um novo dividendo
async function addDividendo(req, res) {
    const { nome, valor, data_pagamento } = req.body;
    try {
        const newDividendo = await createDividendo(nome, valor, data_pagamento);
        res.status(201).json(newDividendo);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao adicionar dividendo');
    }
}

// Atualizar um dividendo pelo ID
async function updateDividendoController(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
        const updatedDividendo = await updateDividendo(id, dadosAtualizados);
        if (!updatedDividendo) {
            res.status(404).send('Dividendo não encontrado');
        } else {
            res.json(updatedDividendo);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao atualizar dividendo');
    }
}

// Deletar um dividendo pelo ID
async function deleteDividendoController(req, res) {
    const { id } = req.params;
    try {
        const deletedDividendo = await deleteDividendo(id);
        if (!deletedDividendo) {
            res.status(404).send('Dividendo não encontrado');
        } else {
            res.json({ message: 'Dividendo deletado com sucesso', dividendo: deletedDividendo });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao deletar dividendo');
    }
}

module.exports = {
    listDividendos,
    getDividendo,
    addDividendo,
    updateDividendo: updateDividendoController,
    deleteDividendo: deleteDividendoController
};