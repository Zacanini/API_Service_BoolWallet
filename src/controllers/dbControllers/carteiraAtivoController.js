const { getAllCarteiraAtivos, getCarteiraAtivoById, createCarteiraAtivo, updateCarteiraAtivo, deleteCarteiraAtivo } = require('../../services/dbServices/carteiraAtivoService');

// Listar todos os ativos da carteira
async function listCarteiraAtivos(req, res) {
    try {
        const carteiraAtivos = await getAllCarteiraAtivos();
        res.json(carteiraAtivos);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar dados');
    }
}

// Listar um ativo da carteira pelo ID
async function getCarteiraAtivo(req, res) {
    const { id } = req.params;
    try {
        const carteiraAtivo = await getCarteiraAtivoById(id);
        if (!carteiraAtivo) {
            res.status(404).send('Ativo da carteira não encontrado');
        } else {
            res.json(carteiraAtivo);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar dados');
    }
}

// Criar um novo ativo na carteira
async function addCarteiraAtivo(req, res) {
    const { nome, quantidade, valor } = req.body;
    try {
        const newCarteiraAtivo = await createCarteiraAtivo(nome, quantidade, valor);
        res.status(201).json(newCarteiraAtivo);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao adicionar ativo na carteira');
    }
}

// Atualizar um ativo da carteira pelo ID
async function updateCarteiraAtivoController(req, res) {
    const { id } = req.params;
    const { nome, quantidade, valor } = req.body;
    try {
        const updatedCarteiraAtivo = await updateCarteiraAtivo(id, { nome, quantidade, valor });
        if (!updatedCarteiraAtivo) {
            res.status(404).send('Ativo da carteira não encontrado');
        } else {
            res.json(updatedCarteiraAtivo);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao atualizar ativo da carteira');
    }
}

// Deletar um ativo da carteira pelo ID
async function deleteCarteiraAtivoController(req, res) {
    const { id } = req.params;
    try {
        const deletedCarteiraAtivo = await deleteCarteiraAtivo(id);
        if (!deletedCarteiraAtivo) {
            res.status(404).send('Ativo da carteira não encontrado');
        } else {
            res.json({ message: 'Ativo da carteira deletado com sucesso', ativo: deletedCarteiraAtivo });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao deletar ativo da carteira');
    }
}

module.exports = {
    listCarteiraAtivos,
    getCarteiraAtivo,
    addCarteiraAtivo,
    updateCarteiraAtivo: updateCarteiraAtivoController,
    deleteCarteiraAtivo: deleteCarteiraAtivoController
};