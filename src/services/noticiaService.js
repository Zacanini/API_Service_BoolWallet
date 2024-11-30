const axios = require('axios');

async function getNoticiasB3() {
  try {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=Ibovespa%Brasil&apiKey=5e36fe1ac5f940e2856e7906b6602298`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter noticias:", error.response ? error.response.data : error.message);
    throw error;
  }
}

module.exports = {
    getNoticiasB3
};