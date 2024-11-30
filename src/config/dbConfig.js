
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('carteira_investimentos', 'postgres', '1XbBAmx2kx30Weqf', {
    host: 'concretely-desirable-snake.data-1.use1.tembo.io',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 50000,
        idle: 10000
    }
});

sequelize.authenticate()
    .then(() => console.log('Conexão com o banco de dados bem-sucedida!'))
    .catch(err => console.error('Erro ao conectar ao banco de dados:', err));

module.exports = sequelize;
