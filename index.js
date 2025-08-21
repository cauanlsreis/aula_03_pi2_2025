const express = require('express'); //npm install express --save
const mongoose = require('mongoose'); //npm install mongoose --save
const dotenv = require('dotenv'); //npm install dotenv --save
const conectaDB = require('./db'); // Importa a função de conexão com o banco de dados
const alunosRouter = require('./routes/alunos.routes'); // Importa as rotas de alunos

const port = 3000;

const app = express();

app.use(express.json());

dotenv.config();

conectaDB(); // Chama a função para conectar ao MongoDB

app.get('/', (req, res) => {
    res.json({message: 'Hello World!'});
});

//Rotas
app.use('/alunos', require('./routes/alunos.routes'));

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});