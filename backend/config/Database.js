import { Sequelize } from "sequelize";

const db = new Sequelize(
  "infinite-scroll", // database name here
  "root", // usernmae database here
  "", // password database here
{
  host: "localhost",
  dialect: "mysql",
});

export default db;
