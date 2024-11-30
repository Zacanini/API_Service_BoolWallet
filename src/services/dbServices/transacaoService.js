const Transacao = require('../../models/Transacao');
const { createAtivo, getAtivoById } = require('./ativoService');

// Função para listar todas as transações
async function getAllTransacoes() {
    return await Transacao.findAll();
}

// Função para buscar uma transação pelo ID
async function getTransacaoById(id) {
    return await Transacao.findByPk(id);
}

// Função para criar uma nova transação
async function createTransacao(id_carteira, ticker, tipo_transacao, quantidade, valor, data_transacao) {
    let ativo = await Ativo.findOne({ where: { ticker } });
    if (!ativo) {
        ativo = await createAtivo(ticker);
    }
    return await Transacao.create({
        id_carteira,
        id_ativo: ativo.id_ativo,
        tipo_transacao,
        quantidade,
        valor,
        data_transacao
    });
}

// Função para atualizar uma transação pelo ID
async function updateTransacao(id, dadosAtualizados) {
    const transacao = await Transacao.findByPk(id);
    if (transacao) {
        return await transacao.update(dadosAtualizados);
    }
    return null;
}

// Função para deletar uma transação pelo ID
async function deleteTransacao(id) {
    const transacao = await Transacao.findByPk(id);
    if (transacao) {
        await transacao.destroy();
        return transacao;
    }
    return null;
}

module.exports = {
    getAllTransacoes,
    getTransacaoById,
    createTransacao,
    updateTransacao,
    deleteTransacao
};