import { Sequelize } from "sequelize";

const configs = require("../mysql/database");

const sequelize = new Sequelize(configs);

export { sequelize };