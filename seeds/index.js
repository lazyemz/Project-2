const sequelize = require('../config/connection');
const seedGames = require('./gamelist');

const seedAll = async () => {
  console.log('asdf');
  await sequelize.sync({ force: true });
  console.log('wsdf');
  console.log('--------------');

  await seedGames();
  console.log('--------------');

  process.exit(0);
};

seedAll();
