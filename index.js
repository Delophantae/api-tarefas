const express = require('express');
const app = express();
const tarefa = require('./models/tarefa');
require('dotenv').config();
app.use((req, res, next) => {
 res.setHeader("Access-Control-Allow-Origin", "*");
 res.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, PATCH, DELETE');
 res.header(
 "Access-Control-Allow-Headers",
 "Origin, X-Requested-With, Content-Type, Accept"
 );
 next();
});
app.use(express.json());
const PORT = process.env.PORT || 3000;
//
const routes = require('./routes/routes');
app.use('/api', routes);
//
app.listen(PORT, () => {
 console.log(`Server Started at ${PORT}`)
})
// Obtendo os parametros passados pela linha de comando
//var userArgs = process.argv.slice(2);
// var mongoURL = userArgs[0]; //tf
//var mongoURL = "mongodb+srv://guiweck:gaming@cluster0.alwh6fm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//Configurando a conexao com o Banco de Dados
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', (error) => {
 console.log(error)
})
db.once('connected', () => {
 console.log('Database Connected');
})

// isso tava no package.json
//, 
    //"vercel-build": "node index.js 'mongodb+srv://guiweck:gaming@cluster0.alwh6fm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'"