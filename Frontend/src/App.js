// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";

import Faq from "./components/faq";
import HomeScreen from "./components/homescreen"; // Pastikan import ini benar
import Hotels from "./components/hotels";
import SplashScreen from "./components/splashscreen";
import Flights from "./components/flights";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Destination from "./components/destinations";
import DetailDestination from "./components/detaildestination";
import Contact from "./components/contact";
import Bus from "./components/bus";

// User
import HomeUser from "./components/user/home"; 
import DestinationUser from "./components/user/destinationUser";
import DetailDestinationUser from "./components/user/detailDestinationUser";
import Pembayaranflight from "./components/user/pembayaranflight";
import Pembayaran from "./components/user/pembayaranflight2";
import History from "./components/user/history";
import BusPayment from "./components/buspayment1"; 
import Payment from "./components/buspayment2"; 
import HotelsUser from "./components/user/hotelUser";
import FlightsUser from "./components/user/flightUser";
import BusUser from "./components/user/busUser";
import Profile from "./components/user/profile";


function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/homescreen" element={<HomeScreen />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/hotel" element={<Hotels/>} />
      <Route path="/flight" element={<Flights/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/destination" element={<Destination/>} />
      <Route path="/detailDestination" element={<DetailDestination/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/bus" element={<Bus/>} />
      {/* Tambahkan route lain sesuai kebutuhan */}

      {/* User */}
      <Route path="/homeUser" element={<HomeUser/>} />
      <Route path="/destinationUser" element={<DestinationUser/>} />
      <Route path="/detailDestinationUser" element={<DetailDestinationUser/>} />
      <Route path="/hotelUser" element={<HotelsUser/>} />
      <Route path="/flightUser" element={<FlightsUser/>} />
      <Route path="/busUser" element={<BusUser/>} />
      <Route path="/history" element={<History/>} />
      <Route path="/profile" element={<Profile/>} />

      <Route path="/pembayaranFlight" element={<Pembayaranflight/>} />
      <Route path="/pembayaranFlight2" element={<Pembayaran/>} />

      
      <Route path="/buspayment" element={<BusPayment/>} />
      <Route path="/buspayment2" element={<Payment/>} />
    </Routes>
  );
}
export default App;
