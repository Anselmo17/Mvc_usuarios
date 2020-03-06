const faker = require('faker');

//gerador daodos automatico
count = 5;

const listUsers = [];

for (i = 0; i < count; i++) {

  listUsers.push({
    id: faker.random.uuid(),
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    phone: Math.floor(Math.random() * 100000000).toString(),
    city: faker.address.city(),
    country: faker.address.country(),
    zipCode: faker.address.zipCode()

  });
};



// exportandos as listas 
module.exports = {
  listUsers
};