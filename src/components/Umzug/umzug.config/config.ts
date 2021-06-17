import Sequelize from 'sequelize';
import path from 'path';
import Umzug from 'umzug';

const sequelize = new Sequelize.Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite'
})

const umzug = new Umzug({
    migrations: {
      path: path.join(__dirname, './migrations'),
      params: [
        sequelize.getQueryInterface()
      ]
    },
    storage: 'sequelize',
    storageOptions: {
      sequelize: sequelize
    }
  })

