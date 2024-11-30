const { getAllAtivos, getAtivoById, createAtivo, updateAtivo, deleteAtivo } = require('../../services/dbServices/ativoService');

// Listar todos os ativos
async function listAtivos(req, res) {
    try {
        const ativos = await getAllAtivos();
        res.json(ativos);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar dados');
    }
}

// Listar um ativo pelo ID
async function getAtivo(req, res) {
    const { id } = req.params;
    try {
        const ativo = await getAtivoById(id);
        if (!ativo) {
            res.status(404).send('Ativo não encontrado');
        } else {
            res.json(ativo);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar dados');
    }
}

// Criar um novo ativo
async function addAtivo(req, res) {
    const { nome, tipo, ticker, preco_atual, variacao, volume, market_cap, logo, setor } = req.body;
    try {
        const newAtivo = await createAtivo({ nome, tipo, ticker, preco_atual, variacao, volume, market_cap, logo, setor });
        res.status(201).json(newAtivo);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao adicionar ativo');
    }
}


// Atualizar um ativo pelo ID
async function updateAtivoController(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
        const updatedAtivo = await updateAtivo(id, dadosAtualizados);
        if (!updatedAtivo) {
            res.status(404).send('Ativo não encontrado');
        } else {
            res.json(updatedAtivo);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao atualizar ativo');
    }
}

// Deletar um ativo pelo ID
async function deleteAtivoController(req, res) {
    const { id } = req.params;
    try {
        const deletedAtivo = await deleteAtivo(id);
        if (!deletedAtivo) {
            res.status(404).send('Ativo não encontrado');
        } else {
            res.json({ message: 'Ativo deletado com sucesso', ativo: deletedAtivo });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao deletar ativo');
    }
}

module.exports = {
    listAtivos,
    getAtivo,
    addAtivo,
    updateAtivo: updateAtivoController,
    deleteAtivo: deleteAtivoController
};
