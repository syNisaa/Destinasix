import "bootstrap/dist/css/bootstrap.min.css"; // Pastikan Bootstrap CSS diimpor
// import React from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import monas from "../assets/img/destinasi/monas.jpg";
import "../css/flights.css"; // Pastikan ini mengarah ke file CSS yang benar

const Flights = () => {
    const [priceRange, setPriceRange] = useState([0, 10000000]);
    const [filters, setFilters] = useState({
        popular: [],
        facilities: [],
    });

    const handlePriceChange = (e) => {
        setPriceRange([0, parseInt(e.target.value)]);
    };

    const handleFilterChange = (e) => {
        const { name, value, checked } = e.target;
        setFilters((prevFilters) => {
            if (checked) {
                return {
                    ...prevFilters,
                    [name]: [...prevFilters[name], value],
                };
            } else {
                return {
                    ...prevFilters,
                    [name]: prevFilters[name].filter((filter) => filter !== value),
                };
            }
        });
    };

    const [Flights, setFlight] = useState([]);

    useEffect(() => {
        getFlights();
    }, []);

    const getFlights = async () => {
        const response = await axios.get("http://localhost:5000/flights");
        setFlight(response.data);
    };

    const deleteFlight = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/flight/${id}`);
            getFlights();
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
                    <a href="/signin">Sign in</a>
                </nav>
            </header>
            <main className="container mt-4">
                <div className="tab-navigation ">
                    <a href="/destination" >Destinations</a>
                    <a href="/hotel">Hotels</a>
                    <a href="/flight" className="btn active">Flight</a>
                    <a href="/bus">Bus</a>
                </div>
                <div className="search-form mb-4">
                    <input type="text" placeholder="Destination" className="form-control me-2" />
                    <input type="date" className="form-control me-2" />
                    <input type="date" className="form-control me-2" />
                    <input type="text" placeholder="1 room, 2 adults, 0 children" className="form-control me-2" />
                    <button class="btn btn-primary">Search</button>
                </div>

                <div className="row">

                    <div className="col-md-3">

                        <div className="filter-section">
                            <div className="price">
                                <p><b><center>Price (Rp 0 - Rp 10,000,000+)</center></b></p>
                                <input type="range" min="0" max="10000000" step="50000" value={priceRange[1]} onChange={handlePriceChange} className="form-range" />
                                <p><center>Up to: Rp {priceRange[1].toLocaleString()}</center></p>
                                <div className="price-options">
                                    <label>
                                        <input type="button" className="btn btn-secondary mb-2" name="price" value="0-300000" onChange={handlePriceChange} />
                                    </label>
                                    <br />
                                    <label>
                                        <input type="button" className="btn btn-secondary mb-2" name="price" value="0-5000000" onChange={handlePriceChange} />
                                    </label>
                                    <br />
                                    <label>
                                        <input type="button" className="btn btn-secondary" name="price" value="0-10000000" onChange={handlePriceChange} />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="filter-section mt-2">
                            <div className="facilities">
                                <h4>All Airlines</h4>
                                <label>
                                    <input type="checkbox" name="facilities" value="wifi" onChange={handleFilterChange} /> Garuda Indonesia
                                </label>
                                <br />
                                <label>
                                    <input type="checkbox" name="facilities" value="pool" onChange={handleFilterChange} /> Citilink
                                </label>
                                <br />
                                <label>
                                    <input type="checkbox" name="facilities" value="parking" onChange={handleFilterChange} /> Lion Air
                                </label>
                                <br />

                            </div>

                        </div>

                    </div>

                    <div className="col-md-9">
                        <div className="hotel-list">
                            <div className="hotel-card card mb-4">
                                <div className="row g-0">
                                    {/* <div className="col-md-4">
                                        <img src="#" className="img-fluid rounded-start" alt="Hotel" />
                                    </div> */}
                                    <div className="col-md-8">
                                        <div className="card-body flighttable">
                                            {/* <h3 className="card-title">Pandawa Beach Hotel</h3> */}
                                            <div className="d-flex justify-content-left align-items-center">

                                                <table className="text-center">
                                                    {Flights.map((flight, index) => (
                                                        <tr>
                                                            <td><h5>{flight.airline}</h5></td>
                                                            <td><h6>{flight.flight_number}</h6></td>
                                                            <td><h6>{flight.departure_airport}</h6></td>
                                                            <td><h6>{flight.arrival_airport}</h6></td>
                                                            <td>{flight.departure_time}</td>
                                                            <td>{flight.arrival_time}</td>
                                                            <td><b>IDR {flight.price_tiket}</b></td>
                                                            <td><a class="btn btn-primary" href="/signin">
                                                                Select
                                                            </a></td>
                                                        </tr>
                                                    ))}
                                                </table>

                                                {/* <a className="btn btn-secondary">4.0/5</a>
                                                <h10 className="card-text">Very Good</h10> */}
                                            </div>



                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Add more hotel cards as needed */}
                        </div>
                    </div>
                </div>

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

            </main>
        </div>

    );
};

export default Flights;