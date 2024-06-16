import "bootstrap/dist/css/bootstrap.min.css";

import hotel1 from "../../assets/img/hotels/hotel-1.jpeg";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../css/hotels.css"; // Pastikan ini mengarah ke file CSS yang benar
import React, { useState, useEffect } from "react";


const HotelsUser = () => {
  const [priceRange, setPriceRange] = useState([0, 10000000]);
  const [setFilters] = useState({
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

  const [Hotels, setHotel] = useState([]);

  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = async () => {
    const response = await axios.get("http://localhost:5000/hotels");
    setHotel(response.data);
  };

  const deleteHotel = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/hotel/${id}`);
      getHotels();
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

      <main className="container mt-4">
        <div className="tab-navigation ">
          <a href="/destinationUser">Destinations</a>
          <a href="/hotelUser" className="btn active">Hotels</a>
          <a href="/flightUser">Flight</a>
          <a href="/busUser">Bus</a>
          <a href="/history">History</a>
        </div>

        <div className="search-form mb-4">
          <input type="text" placeholder="Destination" className="form-control me-2" />
          <input type="date" className="form-control me-2" />
          <input type="date" className="form-control me-2" />
          <input type="text" placeholder="1 room, 2 adults, 0 children" className="form-control me-2" />
          <button className="btn btn-dark">SEARCH</button>
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
              <div className="popular">
                <h4>Popular Filters</h4>
                <label>
                  <input type="checkbox" name="popular" value="breakfast" onChange={handleFilterChange} /> Breakfast Included
                </label>
                <br />
                <label>
                  <input type="checkbox" name="popular" value="payment" onChange={handleFilterChange} /> Only Payment
                </label>
                <br />
                <label>
                  <input type="checkbox" name="popular" value="payAtHotel" onChange={handleFilterChange} /> Pay at Hotel
                </label>
                <br />
                <label>
                  <input type="checkbox" name="popular" value="singleBed" onChange={handleFilterChange} /> Single Bed
                </label>
                <br />
                <label>
                  <input type="checkbox" name="popular" value="doubleBed" onChange={handleFilterChange} /> Double Bed
                </label>
              </div>
            </div>

            <div className="filter-section mt-2">
              <div className="facilities">
                <h4>Facilities</h4>
                <label>
                  <input type="checkbox" name="facilities" value="wifi" onChange={handleFilterChange} /> WiFi
                </label>
                <br />
                <label>
                  <input type="checkbox" name="facilities" value="pool" onChange={handleFilterChange} /> Swimming Pool
                </label>
                <br />
                <label>
                  <input type="checkbox" name="facilities" value="parking" onChange={handleFilterChange} /> Parking
                </label>
                <br />
                <label>
                  <input type="checkbox" name="facilities" value="restaurant" onChange={handleFilterChange} /> Restaurant
                </label>
                <br />
                <label>
                  <input type="checkbox" name="facilities" value="elevator" onChange={handleFilterChange} /> Elevator
                </label>
              </div>

            </div>

          </div>

          <div className="col-md-9">
            <div className="hotel-list">
              {Hotels.map((hotel, index) => (
                <div className="hotel-card card mb-4">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={hotel1} className="img-fluid rounded-start" alt="Hotel" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h3 className="card-title">{hotel.name}</h3>
                        <div className="d-flex justify-content-left align-items-center">
                          <a className="btn btn-secondary">4.0/5</a>
                          <h10 className="card-text">Very Good</h10>
                        </div>

                        <div className="kota-text">
                          <small className="text-muted">{hotel.location}</small><br />
                        </div>

                        <div className="row room-info p-2 mb-2">
                          <div className="col-7 left">
                            <div>
                              <h10>Type Room : {hotel.description}</h10>
                            </div>
                            <div className="red">
                              <h10>Facility : {hotel.amenities}</h10>
                            </div>
                          </div>
                          <div className="col-5 right">
                            <a className="btn btn-danger">20% OFF</a>
                            <p className=""><b>Price: </b> Rp 1,500,000</p>
                            <div className="d-flex justify-content-end align-items-center">
                              <a className="btn btn-outline-primary ">Book Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              ))}
            </div>
          </div>
        </div>

      </main >
    </div >
  );
};

export default HotelsUser;