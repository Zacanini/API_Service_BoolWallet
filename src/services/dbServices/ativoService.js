const Ativo = require('../../models/Ativo');
const { getAcaoTicker } = require('../financeService');

// Função para listar todos os ativos
async function getAllAtivos() {
    return await Ativo.findAll();
}

// Função para buscar um ativo pelo ID
async function getAtivoById(id) {
    const ativo = await Ativo.findByPk(id);
    if (ativo) {
        const tickerData = await getAcaoTicker(ativo.ticker);
        if (tickerData && tickerData.results && tickerData.results[0]) {
            const precoAtual = tickerData.results[0].close;
            ativo.preco_atual = precoAtual;
        }
        return ativo;
    }
    return null;
}

// Função para criar um novo ativo
async function createAtivo(dadosAtivo) {
    const tickerData = await getAcaoTicker(dadosAtivo.ticker);
    if (tickerData && tickerData.results && tickerData.results[0]) {
        const { stock, name, close, change, volume, market_cap, logo, sector, type } = tickerData.results[0];
        return await Ativo.create({
            ticker: stock,
            nome: name,
            tipo: type,
            preco_atual: close,
            variacao: change,
            volume: volume,
            market_cap: market_cap,
            logo: logo,
            setor: sector
        });
    }
    throw new Error('Dados do ticker não encontrados');
}

// Função para atualizar um ativo pelo ID
async function updateAtivo(id, dadosAtualizados) {
    const ativo = await Ativo.findByPk(id);
    if (ativo) {
        return await ativo.update(dadosAtualizados);
    }
    return null;
}

// Função para deletar um ativo pelo ID
async function deleteAtivo(id) {
    const ativo = await Ativo.findByPk(id);
    if (ativo) {
        await ativo.destroy();
        return ativo;
    }
    return null;
}

module.exports = {
    getAllAtivos,
    getAtivoById,
    createAtivo,
    updateAtivo,
    deleteAtivo
};