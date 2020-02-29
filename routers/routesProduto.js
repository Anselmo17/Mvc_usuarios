const { app, faker } = require('../server');



// rotas dos produtos
app.get('/', (req, res) => {
  res.render('pages/home')
});

app.get('/produto', (req, res) => {

  let listaProdutos = [
    {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      phone: faker.phone.phoneNumber(),
      city: faker.address.city(),
      zipCode: faker.address.zipCode()

    },
    {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      phone: faker.phone.phoneNumber(),
      city: faker.address.city(),
      zipCode: faker.address.zipCode()
    }
  ];

  res.render('pages/produto', { produtos: listaProdutos });
});


app.get('/sobre', (req, res) => {
  res.status(200).render('pages/SobreNos');
});
