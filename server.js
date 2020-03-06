const express = require('express');
const bodyParser = require('body-parser');
const expressLayout = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 3000;


// CONFIGURANDO A APLICAÇÃO

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


// exportar configs do app para outras partes da aplicaçao
module.exports = {
  app
};


// tratamento caso tem erros nas rotas
try {
  // carrega as rotas 
  const routers = require('./routers/controllerUsuario');

} catch (e) {
  console.log("houve erro => " + e);
}





