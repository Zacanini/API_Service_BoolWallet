const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const Usuario = require('./Usuario'); // Importa o modelo de Usuário para relacionamento

const Carteira = sequelize.define('Carteira', {
    id_carteira: { type: DataTypes.INTEGER, primaryKey: true,  references: { model: Usuario, key: 'id_usuario' } },
    id_usuario: { type: DataTypes.INTEGER, allowNull: false, references: { model: Usuario, key: 'id_usuario' } },
    saldo_disponivel: { type: DataTypes.DECIMAL, allowNull: false, defaultValue: 0.0 },
    data_ultima_atualizacao: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    tableName: 'carteira',
    timestamps: false
});

Usuario.hasOne(Carteira, { foreignKey: 'id_usuario' });
Carteira.belongsTo(Usuario, { foreignKey: 'id_usuario' });

module.exports = Carteira;
