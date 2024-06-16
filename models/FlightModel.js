import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Flight = db.define('tb_flights',{
    airline: DataTypes.STRING,
    flight_number: DataTypes.STRING,
    departure_airport: DataTypes.STRING,
    arrival_airport: DataTypes.STRING,
    departure_time: DataTypes.DATE,
    arrival_time: DataTypes.DATE,
    price_tiket: DataTypes.DECIMAL
},{
    freezeTableName:true
});

export default Flight;

(async()=>{
    await db.sync();
})();