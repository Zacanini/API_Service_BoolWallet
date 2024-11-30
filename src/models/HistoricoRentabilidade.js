const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const Carteira = require('./Carteira');

const HistoricoRentabilidade = sequelize.define('HistoricoRentabilidade', {
    id_rentabilidade: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_carteira: { type: DataTypes.INTEGER, allowNull: false, references: { model: Carteira, key: 'id_carteira' } },
    data_calculo: { type: DataTypes.DATE, allowNull: false },
    rentabilidade: { type: DataTypes.DECIMAL, allowNull: false }
}, {
    tableName: 'historico_rentabilidade',
    timestamps: false
});

Carteira.hasMany(HistoricoRentabilidade, { foreignKey: 'id_carteira' });
HistoricoRentabilidade.belongsTo(Carteira, { foreignKey: 'id_carteira' });

module.exports = HistoricoRentabilidade;
