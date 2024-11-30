const axios = require('axios');
const API_KEY = 'ga7ejgvYyqAYZrpfQbjQGx';

async function getAllAcoes() {
  try {
    const response = await axios.get(`https://brapi.dev/api/quote/list?type=stock&token=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter ações:", error.response ? error.response.data : error.message);
    throw error;
  }
}
async function getAcaoTicker(ticker) {
  try {
    const response = await axios.get(`https://brapi.dev/api/quote/${ticker}?modules=summaryProfile&token=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter ações:", error.response ? error.response.data : error.message);
    throw error;
  }
}
async function getAllTickers() {
  try {
    const response = await axios.get(`https://brapi.dev/api/available/?token=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter tickers:", error.response ? error.response.data : error.message);
    throw error;
  }
}

async function getAllFundos() {
  try {
    const response = await axios.get(`https://brapi.dev/api/quote/list?type=fund&token=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter fundos:", error.response ? error.response.data : error.message);
    throw error;
  }
}

async function getAllMoedas() {
  try {
    const response = await axios.get(``);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter moedas:", error.response ? error.response.data : error.message);
    throw error;
  }
}

module.exports = {
  getAllAcoes,
  getAllFundos,
  getAllMoedas,
  getAllTickers,
  getAcaoTicker
};