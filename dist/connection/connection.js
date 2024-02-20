"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('tracker', 'root', 'Nitish@1234', {
    dialect: 'mysql', // Set the database dialect to MySQL
    host: 'localhost', // Change to your MySQL database host
});
exports.default = sequelize;
//# sourceMappingURL=connection.js.map