import "bootstrap/dist/css/bootstrap.min.css"; // Pastikan Bootstrap CSS diimpor
// import React from "react";
import React, { useState } from "react";
import monas from "../assets/img/destinasi/monas.jpg";
import "../css/destinations.css"; // Pastikan ini mengarah ke file CSS yang benar

const Destinations = () => {
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
            <main className="container mt-5">

                <div class="row">
                    <div class="col-7 mt-5">
                        <div class="card">
                            <div class="card-body">
                                <h5><b>Monumen Nasional</b></h5>
                                <p className="paragraf">The National Monument or what is abbreviated as Monas or Tugu Monas is a 132 meter (433 foot) high memorial monument located right in the middle of Medan Merdeka Square, Central Jakarta. Monas was established to commemorate the resistance and struggle of the Indonesian people in gaining independence from the colonial government of the Dutch Kingdom. Construction began on 17 August 1961 under the orders of President Soekarno and was inaugurated until it was opened to the public on 12 July 1975 by President Soeharto. This monument is crowned with a flame covered in gold leaf which symbolizes the burning spirit of struggle of the Indonesian people.</p>
                            </div>

                            <div>
                                <a href="/signin" className="btn btn-primary">Search Airplane Tickets</a> 
                                <a href="/destination" className="btn btn-outline-secondary">Back</a>
                            </div>

                        </div>
                    </div>


                    <div className="col-4">
                        <img src={monas} class="img-fluid rounded-start" alt="Destinasi Wisata" />
                    </div>
                </div> <br />


            </main >
        </div >
    );
};

export default Destinations;