const {
    getAllTransacoes,
    getTransacaoById,
    createTransacao,
    updateTransacao,
    deleteTransacao
} = require('../../services/dbServices/transacaoService');

// Listar todas as transações
async function listTransacoes(req, res) {
    try {
        const result = await getAllTransacoes();
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar transações');
    }
}

// Buscar uma transação pelo ID
async function getTransacao(req, res) {
    const { id } = req.params;
    try {
        const result = await getTransacaoById(id);
        if (!result) {
            res.status(404).send('Transação não encontrada');
        } else {
            res.json(result);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar transação');
    }
}

// Criar uma nova transação
async function addTransacao(req, res) {
    const { id_carteira, id_ativo, tipo, quantidade, valor_total } = req.body;
    try {
        const result = await createTransacao(id_carteira, id_ativo, tipo, quantidade, valor_total);
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao adicionar transação');
    }
}

// Atualizar uma transação pelo ID
async function updateTransacaoController(req, res) {
    const { id } = req.params;
    const { tipo, quantidade, valor_total } = req.body;
    try {
        const result = await updateTransacao(id, tipo, quantidade, valor_total);
        if (!result) {
            res.status(404).send('Transação não encontrada');
        } else {
            res.json(result);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao atualizar transação');
    }
}

// Deletar uma transação pelo ID
async function deleteTransacaoController(req, res) {
    const { id } = req.params;
    try {
        const result = await deleteTransacao(id);
        if (!result) {
            res.status(404).send('Transação não encontrada');
        } else {
            res.json({ message: 'Transação deletada com sucesso', transacao: result });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao deletar transação');
    }
}

module.exports = {
    listTransacoes,
    getTransacao,
    addTransacao,
    updateTransacao: updateTransacaoController,
    deleteTransacao: deleteTransacaoController
};