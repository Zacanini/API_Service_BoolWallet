const { getNoticiasB3 } = require('../services/noticiaService');

async function listNoticiasB3(req, res) {
  try {
    const noticias = await getNoticiasB3();
    res.json(noticias);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar noticias');
  }
}

module.exports = {
    listNoticiasB3
  };