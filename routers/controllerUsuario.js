//status requisições
const { http } = require('../helpers/enums');
// extraindo a config do app
const { app } = require('../server');
// lista de dados 
const { listUsers } = require('../listas/listas');




// rotas app usuarios
app.get('/', (req, res) => {
  res.status(http.OK).render('pages/home')
});


app.get('/usuario', (req, res) => {
  // chama a pagina a ser renderizada com a lista de dados 
  res.render('pages/usuario', {
    usuarios: listUsers,
  });
});

app.get('/sobre', (req, res) => {
  res.status(http.OK).render('pages/SobreNos');
});


// chama a pagina de cadastrar usuario
app.get('/cadastrar', (req, res) => {
  res.status(http.OK).render('pages/cadastrar')
});


// cadastra e redireciona o usuario para pagina usuário
app.post('/cadastrar', (req, res) => {
// extraindo os dados 
  const { name, city, country, telephone, zipCode } = req.body;
  // pegando dados do usuario
  const user = {
    name,
    city,
    telephone,
    country,
    zipCode
  };

  // cadastra o usuario no banco
  //todo:

  // depois de enviar 0s dados rediciona a pagina usuario
  res.status(http.CREATED).redirect('/usuario')
});


// remove usuario pelo Id
app.post('/usuario/:id', (req, res) => {

  const id = req.body.id;

  // exclui o usuario do banco 


  // redireciona para pagina usuario
  res.status(http.NO_CONTENT).redirect('/usuario');
});





