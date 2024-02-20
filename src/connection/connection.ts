import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('tracker', 'root', 'Nitish@1234', {
  dialect: 'mysql', // Set the database dialect to MySQL
  host: 'localhost', // Change to your MySQL database host
});

export default sequelize;
