import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const History = db.define('history',{
    name: DataTypes.STRING,
    name_tiket: DataTypes.STRING,
    tanggal: DataTypes.DATE,
    price: DataTypes.DOUBLE
},{
    freezeTableName:true
});

export default History;

(async()=>{
    await db.sync();
})();