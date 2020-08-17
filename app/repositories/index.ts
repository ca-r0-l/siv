import { sequelize } from "./implementation/mysql/SequelizeConnection";

const connection = sequelize;

const testConnection = async () => {
    try {
        await connection.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
    
export { connection, testConnection };