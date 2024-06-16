import {Sequelize} from "sequelize";

const db = new Sequelize('db_travel','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;