import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Bus = db.define('tb_bus',{
    bus_name: DataTypes.STRING,
    bus_type: DataTypes.STRING,
    capacity: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DOUBLE
},{
    freezeTableName:true
});

export default Bus;

(async()=>{
    await db.sync();
})();