const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Ativo = sequelize.define('Ativo', {
    id_ativo: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    ticker: { type: DataTypes.STRING, allowNull: false },
    nome: { type: DataTypes.STRING, allowNull: false },
    tipo: { type: DataTypes.STRING, allowNull: false },
    preco_atual: { type: DataTypes.FLOAT, allowNull: false },
    variacao: { type: DataTypes.FLOAT }, // Variação percentual
    volume: { type: DataTypes.BIGINT }, // Volume negociado
    market_cap: { type: DataTypes.BIGINT }, // Capitalização de mercado
    logo: { type: DataTypes.STRING }, // URL do logo
    setor: { type: DataTypes.STRING }, // Setor do ativo
}, {
    tableName: 'Ativos',
    timestamps: false,
});

module.exports = Ativo;