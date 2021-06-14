"use strict";

import * as Sequelize from "sequelize";
import * as fs from "fs";
import * as path from "path";

const basename = path.basename(__filename);
const db = {
  sequelize: Sequelize.Sequelize,
};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      "!!! Fill in your client link !!!",
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// @ts-expect-error
db.sequelize = connection;
// @ts-expect-error
db.Sequelize = Sequelize;

module.exports = db;
