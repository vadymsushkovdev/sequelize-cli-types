import { Sequelize } from "sequelize";

const connection = new Sequelize(
  `db_development`,
  `postgres`,
  `postgres`,
  { host: `postgres`, dialect: 'postgres' }
);

connection
  .authenticate()
  .then(() => {
    console.log("Connection to postgres has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to postgres:", err);
  });

export default connection;
