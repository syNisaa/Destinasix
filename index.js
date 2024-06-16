import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import HotelRoute from "./routes/HotelRoute.js";
import DestinationRoute from "./routes/DestinationRoute.js";
import BusRoute from "./routes/BusRoute.js";
import FlightRoute from "./routes/FlightRoute.js";
import HistoryRoute from "./routes/HistoryRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(HotelRoute);
app.use(DestinationRoute);
app.use(BusRoute);
app.use(FlightRoute);
app.use(HistoryRoute);

app.listen(5000, ()=> console.log('Server up and running...'));