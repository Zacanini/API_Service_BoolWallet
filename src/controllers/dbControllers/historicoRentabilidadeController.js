const { getAllHistoricoRentabilidade, getHistoricoRentabilidadeById, createHistoricoRentabilidade, updateHistoricoRentabilidade, deleteHistoricoRentabilidade } = require('../../services/dbServices/historicoRentabilidadeService');

// Listar todo o histórico de rentabilidade
async function listHistoricoRentabilidade(req, res) {
    try {
        const historicoRentabilidade = await getAllHistoricoRentabilidade();
        res.json(historicoRentabilidade);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar dados');
    }
}

// Buscar um histórico de rentabilidade pelo ID
async function getHistoricoRentabilidade(req, res) {
    const { id } = req.params;
    try {
        const historicoRentabilidade = await getHistoricoRentabilidadeById(id);
        if (!historicoRentabilidade) {
            res.status(404).send('Histórico de rentabilidade não encontrado');
        } else {
            res.json(historicoRentabilidade);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar dados');
    }
}

// Criar um novo histórico de rentabilidade
async function addHistoricoRentabilidade(req, res) {
    const { data, valor } = req.body;
    try {
        const newHistoricoRentabilidade = await createHistoricoRentabilidade(data, valor);
        res.status(201).json(newHistoricoRentabilidade);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao adicionar histórico de rentabilidade');
    }
}

// Atualizar um histórico de rentabilidade pelo ID
async function updateHistoricoRentabilidadeController(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
        const updatedHistoricoRentabilidade = await updateHistoricoRentabilidade(id, dadosAtualizados);
        if (!updatedHistoricoRentabilidade) {
            res.status(404).send('Histórico de rentabilidade não encontrado');
        } else {
            res.json(updatedHistoricoRentabilidade);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao atualizar histórico de rentabilidade');
    }
}

// Deletar um histórico de rentabilidade pelo ID
async function deleteHistoricoRentabilidadeController(req, res) {
    const { id } = req.params;
    try {
        const deletedHistoricoRentabilidade = await deleteHistoricoRentabilidade(id);
        if (!deletedHistoricoRentabilidade) {
            res.status(404).send('Histórico de rentabilidade não encontrado');
        } else {
            res.json({ message: 'Histórico de rentabilidade deletado com sucesso', historicoRentabilidade: deletedHistoricoRentabilidade });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao deletar histórico de rentabilidade');
    }
}

module.exports = {
    listHistoricoRentabilidade,
    getHistoricoRentabilidade,
    addHistoricoRentabilidade,
    updateHistoricoRentabilidade: updateHistoricoRentabilidadeController,
    deleteHistoricoRentabilidade: deleteHistoricoRentabilidadeController
};