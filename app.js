const express = require('express');
// bancos de dados
const usuarioRoutes = require('./src/routes/dbRoutes/usuarioRoutes');
const carteiraAtivoRoutes = require('./src/routes/dbRoutes/carteiraAtivoRoutes');
const ativoRoutes = require('./src/routes/dbRoutes/ativoRoutes');
const carteiraRoutes = require('./src/routes/dbRoutes/carteiraRoutes');
const dividendoRoutes = require('./src/routes/dbRoutes/dividendoRoutes');
const transacaoRoutes = require('./src/routes/dbRoutes/transacaoRoutes');
const historicoRentabilidadeRoutes = require('./src/routes/dbRoutes/historicoRentabilidadeRoutes');
const financeRouter = require('./src/routes/financeRoutes');
// OAuth
const authRouter = require('./src/routes/authRoutes');
//news
const noticiasRoutes = require('./src/routes/noticiaRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/usuarios', usuarioRoutes); // Define a rota base para usuários
app.use('/carteira-ativos', carteiraAtivoRoutes); // Define a rota base para carteira de ativos
app.use('/ativos', ativoRoutes); // Define a rota base para ativos
app.use('/carteiras', carteiraRoutes); // Define a rota base para carteiras
app.use('/dividendos', dividendoRoutes); // Define a rota base para dividendos
app.use('/transacoes', transacaoRoutes); // Define a rota base para transações
app.use('/historico-rentabilidade', historicoRentabilidadeRoutes); // Define a rota base para histórico de rentabilidade
app.use('/auth', authRouter); // Define a rota base para autenticação OAuth
app.use('/finance', financeRouter); // Define a rota base para finanças
app.use('/noticias', noticiasRoutes); // Define a rota base para notícias

app.listen(PORT, () => {
    console.log(`Servidor rodando no localhost:${PORT}`);
});