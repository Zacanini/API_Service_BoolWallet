const { getAllAcoes, getAllFundos, getAllMoedas, getAllTickers ,getAcaoTicker} = require('../services/financeService');

async function listAcoes(req, res) {
  try {
    const acoes = await getAllAcoes();
    res.json(acoes);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar ações');
  }
}

async function listTickers(req, res) {
  const { ticker } = req.params;
  try {
    const ativo = await getAcaoTicker(ticker);
    if (!ativo) {
      res.status(404).send('Ativo não encontrado');
    } else {
      res.json(ativo);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar ativo');
  }
}

async function lisAllTickers(req, res) {
  try {
    const tickers = await getAllTickers();
    res.json(tickers);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar tickers');
  }
}

async function listFundos(req, res) {
  try {
    const fundos = await getAllFundos();
    res.json(fundos);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar fundos');
  }
}

async function listMoedas(req, res) {
  try {
    const moedas = await getAllMoedas();
    res.json(moedas);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar moedas');
  }
}

module.exports = {
  listAcoes,
  listFundos,
  listMoedas,
  lisAllTickers,
  listTickers
};