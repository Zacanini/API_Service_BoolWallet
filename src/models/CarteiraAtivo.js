const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const Carteira = require('./Carteira');
const Ativo = require('./Ativo');

const CarteiraAtivo = sequelize.define('CarteiraAtivo', {
    id_carteira_ativo: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_carteira: { type: DataTypes.INTEGER, allowNull: true, references: { model: Carteira, key: 'id_carteira' } },
    id_ativo: { type: DataTypes.INTEGER, allowNull: true, references: { model: Ativo, key: 'id_ativo' } },
    quantidade: { type: DataTypes.DECIMAL, allowNull: true },
    valor_medio: { type: DataTypes.DECIMAL, allowNull: false },
    data_aquisicao: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
}, {
    tableName: 'carteira_ativos',
    timestamps: false
});

Carteira.hasMany(CarteiraAtivo, { foreignKey: 'id_carteira' });
Ativo.hasMany(CarteiraAtivo, { foreignKey: 'id_ativo' });
CarteiraAtivo.belongsTo(Carteira, { foreignKey: 'id_carteira' });
CarteiraAtivo.belongsTo(Ativo, { foreignKey: 'id_ativo' });

module.exports = CarteiraAtivo;
