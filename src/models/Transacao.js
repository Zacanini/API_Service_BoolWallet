const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const Carteira = require('./Carteira');
const Ativo = require('./Ativo');

const Transacao = sequelize.define('Transacao', {
    id_transacao: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_carteira: { type: DataTypes.INTEGER, allowNull: false, references: { model: Carteira, key: 'id_carteira' } },
    id_ativo: { type: DataTypes.INTEGER, allowNull: false, references: { model: Ativo, key: 'id_ativo' } },
    tipo_transacao: { type: DataTypes.STRING, allowNull: false },
    quantidade: { type: DataTypes.DECIMAL, allowNull: false },
    valor: { type: DataTypes.DECIMAL, allowNull: false },
    data_transacao: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
}, {
    tableName: 'transacoes',
    timestamps: false
});

Carteira.hasMany(Transacao, { foreignKey: 'id_carteira' });
Ativo.hasMany(Transacao, { foreignKey: 'id_ativo' });
Transacao.belongsTo(Carteira, { foreignKey: 'id_carteira' });
Transacao.belongsTo(Ativo, { foreignKey: 'id_ativo' });

module.exports = Transacao;
