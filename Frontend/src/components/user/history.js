// src/components/BusPayment.js
import { Container, Row, Col, Card, Form, Button, Image } from "react-bootstrap";
import user1 from "../../assets/img/2.jpg";


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../../css/history.css"; // Pastikan file CSS ini ada

const History = () => {
    const [History, setHistory] = useState([]);

    useEffect(() => {
        getHistorys();
    }, []);

    const getHistorys = async () => {
        const response = await axios.get("http://localhost:5000/historys");
        setHistory(response.data);
    };

    const deleteHistory = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/history/${id}`);
            getHistorys();
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
                <div className="tab-navigation">
                    <a href="/destinationUser">Destinations</a>
                    <a href="/hotelUser">Hotels</a>
                    <a href="/flightUser">Flight</a>
                    <a href="/busUser">Bus</a>
                    <a href="/history" className="btn active">History</a>
                </div>
                <div className="search-form mb-4">
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Search Histry" />
                    <button className="btn btn-dark">SEARCH</button>
                </div>

                <Container className="history-container">
                    <Row className="history-title mb-4 ">
                        <h2>
                            <b>Riwayat Pesanan</b>
                        </h2>
                    </Row>
                    <Row className="order-card mb-4">
                        <Col className="order-info p-3">
                            {History.map((history, index) => (
                                <div key={index} className="bus-option d-flex justify-content-between align-items-center p-3 my-2">
                                    <div className="bus-info">
                                        <h5>{history.name}</h5>
                                        <p>Type :{history.name_tiket} /<b> Tanggal: {history.tanggal}</b></p>
                                        <p>IDR {history.price} . 000</p>
                                        <hr></hr>
                                    </div>
                                </div>
                            ))}
                        </Col>
                    </Row>

                </Container>
            </main>
        </div>
    );
};

export default History;