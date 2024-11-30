const { getAllCarteiras, getCarteiraById, createCarteira, updateCarteira, deleteCarteira } = require('../../services/dbServices/carteiraService');

// Listar todas as carteiras
async function listCarteiras(req, res) {
    try {
        const carteiras = await getAllCarteiras();
        res.json(carteiras);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar dados');
    }
}

// Listar uma carteira pelo ID
async function getCarteira(req, res) {
    const { id } = req.params;
    try {
        const carteira = await getCarteiraById(id);
        if (!carteira) {
            res.status(404).send('Carteira não encontrada');
        } else {
            res.json(carteira);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar dados');
    }
}

// Criar uma nova carteira
async function addCarteira(req, res) {
    const { nome, descricao } = req.body;
    try {
        const newCarteira = await createCarteira(nome, descricao);
        res.status(201).json(newCarteira);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao adicionar carteira');
    }
}

// Atualizar uma carteira pelo ID
async function updateCarteiraController(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
        const updatedCarteira = await updateCarteira(id, dadosAtualizados);
        if (!updatedCarteira) {
            res.status(404).send('Carteira não encontrada');
        } else {
            res.json(updatedCarteira);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao atualizar carteira');
    }
}

// Deletar uma carteira pelo ID
async function deleteCarteiraController(req, res) {
    const { id } = req.params;
    try {
        const deletedCarteira = await deleteCarteira(id);
        if (!deletedCarteira) {
            res.status(404).send('Carteira não encontrada');
        } else {
            res.json({ message: 'Carteira deletada com sucesso', carteira: deletedCarteira });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao deletar carteira');
    }
}

module.exports = {
    listCarteiras,
    getCarteira,
    addCarteira,
    updateCarteira: updateCarteiraController,
    deleteCarteira: deleteCarteiraController
};