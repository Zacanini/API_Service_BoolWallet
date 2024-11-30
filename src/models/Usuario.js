const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Usuario = sequelize.define('Usuario', {
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  githubId: {
    type: DataTypes.STRING,
    field: 'github_id', // Mapeando para o nome correto no banco
    allowNull: true,
  },
  avatar_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  data_criacao: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'usuarios', // Especificando o nome da tabela
  timestamps: false, // Desativando as colunas createdAt e updatedAt
});

module.exports = Usuario;