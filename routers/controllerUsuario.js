// extraindo a config do app
const { app } = require('../server');

// lista de dados 
const { listUsers } = require('../listas/listas');


// rotas app usuarios
app.get('/', (req, res) => {
  res.render('pages/home')
});

app.get('/usuario', (req, res) => {

  // chama a pagina a ser renderizada com a lista de dados 
  res.render('pages/usuario', {
    usuarios: listUsers,
  });
});


app.get('/sobre', (req, res) => {
  res.status(200).render('pages/SobreNos');
});
