import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../../css/bus.css"; // Pastikan ini mengarah ke file CSS yang benar

const BusUser = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [priceRange, setPriceRange] = useState([0, 10000000]);

    const days = [
        { date: "Thu, May 30", price: 700000 },
        { date: "Fri, May 31", price: 750000 },
        { date: "Sat, Jun 1", price: 800000 },
        { date: "Sun, Jun 2", price: 850000 },
        { date: "Mon, Jun 3", price: 900000 },
        { date: "Tue, Jun 4", price: 950000 },
        { date: "Wed, Jun 5", price: 1000000 },
    ];

    const busOptions = [
        { name: "PT Global Transport", time: "07:00", price: 200000 },
        { name: "PT Gunung Harta", time: "08:00", price: 250000 },
        { name: "PT Primadona", time: "09:00", price: 300000 },
        { name: "PT Harapan Jaya", time: "10:00", price: 350000 },
        { name: "PT Lorena", time: "11:00", price: 400000 },
    ];

    const [Bus, setBus] = useState([]);

    useEffect(() => {
        getBuss();
    }, []);

    const getBuss = async () => {
        const response = await axios.get("http://localhost:5000/buss");
        setBus(response.data);
    };

    const deleteBus = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/bus/${id}`);
            getBuss();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="home-screen">
            <header className="header">
                <div className="logo">
                    <span>
                        DESTINA<span>6</span>
                    </span>
                </div>
                <nav className="nav-bar">
                    <a href="/">Home</a>
                    <a href="/faq">FAQ</a>
                    <a href="/contact">Contact</a>
                    <a href="/profile">My Profile</a>
                </nav>
            </header>

            <main className="container text-center mt-4">
                <div className="tab-navigation">
                    <a href="/destinationUser">Destinations</a>
                    <a href="/hotelUser">Hotels</a>
                    <a href="/flightUser">Flight</a>
                    <a href="/busUser" className="btn active">Bus</a>
                    <a href="/history" >History</a>
                </div>
                <div className="search-form">
                    <input type="text" placeholder="Destination" className="form-control me-2" />
                    <input type="date" className="form-control me-2" />
                    <input type="date" className="form-control me-2" />
                    <input type="text" placeholder="1 room, 2 adults, 0 children" className="form-control me-2" />
                    <button className="btn btn-dark">SEARCH</button>
                </div>

                <div className="bus-date">
                    <div className="days-slider d-flex justify-content-between">
                        {days.map((day, index) => (
                            <div key={index} className={`day-option ${selectedDay === day.date ? "selected" : ""}`} onClick={() => setSelectedDay(day.date)}>
                                <p>{day.date}</p>
                                <p>Rp {day.price.toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bus-options-container d-flex justify-content-between mt-4">
                    <div className="filters-container">
                        <div className="price-range box">
                            <h5>
                                Price (Rp {priceRange[0].toLocaleString()} - Rp {priceRange[1].toLocaleString()})
                            </h5>
                            <input type="range" min="0" max="10000000" step="100000" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], e.target.value])} className="form-range" />
                            <div className="price-options d-flex flex-column">
                                <button className="btn btn-outline-dark mb-2" onClick={() => setPriceRange([0, 300000])}>
                                    Rp 0 - Rp 300,000
                                </button>
                                <button className="btn btn-outline-dark mb-2" onClick={() => setPriceRange([0, 500000])}>
                                    Rp 0 - Rp 500,000
                                </button>
                                <button className="btn btn-outline-dark" onClick={() => setPriceRange([0, 10000000])}>
                                    Rp 0 - Rp 10,000,000
                                </button>
                            </div>
                        </div>
                        <div className="bus-companies box mt-3">
                            <h5>All Bus Companies</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="busCompany1" />
                                <label className="form-check-label" htmlFor="busCompany1">
                                    PO Gunung Harta
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="busCompany2" />
                                <label className="form-check-label" htmlFor="busCompany2">
                                    PO Primadona
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="busCompany2" />
                                <label className="form-check-label" htmlFor="busCompany2">
                                    PO Sinar Jaya
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="busCompany2" />
                                <label className="form-check-label" htmlFor="busCompany2">
                                    PO Global Transport
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="busCompany2" />
                                <label className="form-check-label" htmlFor="busCompany2">
                                    PO Rukun Jaya
                                </label>
                            </div>
                            {/* Add more bus companies as needed */}
                        </div>
                    </div>

                    <div className="bus-options">
                        <div className="bus-list mt-4">
                            {Bus.map((bus, index) => (
                                <div key={index} className="bus-option d-flex justify-content-between align-items-center p-3 my-2">
                                    <div className="bus-info">
                                        <h5>{bus.bus_name}</h5>
                                        <p>Type :{bus.bus_type} / {bus.description} /<b> Capacity: {bus.capacity}</b></p>
                                        <p>IDR {bus.price}</p>
                                    </div>
                                    <a href="/buspayment" type="button" className="btn btn-primary btn-sm">
                                        Book
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BusUser;