import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('tb_hotels',{
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DOUBLE,
    amenities: DataTypes.TEXT
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();