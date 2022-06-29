import { Sequelize } from "sequelize";

const db = new Sequelize("infinite-scroll", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
