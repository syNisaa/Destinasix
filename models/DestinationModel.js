import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Destination = db.define('tb_destinations',{
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.TEXT,
    popular_attractions: DataTypes.TEXT,
    price_tiket: DataTypes.DOUBLE,
},{
    freezeTableName:true
});

export default Destination;

(async()=>{
    await db.sync();
})();