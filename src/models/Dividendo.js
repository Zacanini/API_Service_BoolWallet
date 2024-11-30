const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const Carteira = require('./Carteira');
const Ativo = require('./Ativo');

const Dividendo = sequelize.define('Dividendo', {
    id_dividendo: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_carteira: { type: DataTypes.INTEGER, allowNull: false, references: { model: Carteira, key: 'id_carteira' } },
    id_ativo: { type: DataTypes.INTEGER, allowNull: false, references: { model: Ativo, key: 'id_ativo' } },
    valor_dividendo: { type: DataTypes.DECIMAL, allowNull: false },
    data_pagamento: { type: DataTypes.DATE, allowNull: false }
}, {
    tableName: 'dividendos',
    timestamps: false
});

Carteira.hasMany(Dividendo, { foreignKey: 'id_carteira' });
Ativo.hasMany(Dividendo, { foreignKey: 'id_ativo' });
Dividendo.belongsTo(Carteira, { foreignKey: 'id_carteira' });
Dividendo.belongsTo(Ativo, { foreignKey: 'id_ativo' });

module.exports = Dividendo;
