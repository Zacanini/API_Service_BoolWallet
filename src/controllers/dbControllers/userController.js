const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../../services/dbServices/UsuarioService');

// Listar todos os usuários
async function listUsers(req, res) {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar dados');
    }
}

// Listar um usuário pelo ID
async function getUser(req, res) {
    const { id } = req.params;
    try {
        const user = await getUserById(id);
        if (!user) {
            res.status(404).send('Usuário não encontrado');
        } else {
            res.json(user);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar dados');
    }
}

// Criar um novo usuário
async function addUser(req, res) {
    const { nome, email, senha, githubId, avatar_url } = req.body;
    try {
        const newUser = await createUser(nome, email, senha, githubId, avatar_url);
        res.status(201).json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao adicionar usuário');
    }
}

// Atualizar um usuário pelo ID
async function updateUserController(req, res) {
    const { id } = req.params;
    const { nome, email, senha, githubId, avatar_url } = req.body;
    try {
        const updatedUser = await updateUser(id, { nome, email, senha, githubId, avatar_url });
        if (!updatedUser) {
            res.status(404).send('Usuário não encontrado');
        } else {
            res.json(updatedUser);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao atualizar usuário');
    }
}

// Deletar um usuário pelo ID
async function deleteUserController(req, res) {
    const { id } = req.params;
    try {
        const deletedUser = await deleteUser(id);
        if (!deletedUser) {
            res.status(404).send('Usuário não encontrado');
        } else {
            res.json({ message: 'Usuário deletado com sucesso', usuario: deletedUser });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao deletar usuário');
    }
}

module.exports = {
    listUsers,
    getUser,
    addUser,
    updateUser: updateUserController,
    deleteUser: deleteUserController
};