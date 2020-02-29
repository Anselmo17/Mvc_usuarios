const express = require('express');
const faker = require('faker');
const bodyParser = require('body-parser');
const expressLayout = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 3000;



// CONFIGURANDO O SERVIDOR 

// type template
app.set('view engine', 'ejs');
app.use(expressLayout);
//app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// busca o template no diretorio
app.use(express.static(__dirname + '/public'))


// servidor rodando e sendo mostrado no console
app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:` + port);
});


// exportar configs do app
module.exports = {
  app,
  faker
};


try {
  // carrega as rotas 
  const routers = require('./routers/routesProduto');

} catch (e) {
  console.log("houve erro => " + err.Message);
}





