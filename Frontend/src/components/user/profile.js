// src/components/BusPayment.js
import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import profile1 from "../../assets/img/1.jpg";
import "../../css/profile.css"; // Pastikan file CSS ini ada

const Profile = () => {
    return (
        <div className="profile-screen">
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
                    <a href="/profile"><u> My Profile </u></a>
                    {/* <a href="/signin">Sign in</a> */}
                </nav>
            </header>

            <Container className="profile-container mt-4">
                <Row>
                    <Col md={4} className="left-column">
                        <div className="profile-card mb-4">
                            <Image src={profile1} roundedCircle className="profile-image" />
                            <h5 className="profile-name">Miranda</h5>
                        </div>
                        <div className="history-card mb-4" >
                            <i className="history-icon"></i>
                                <center><a href="/history" className="btn btn-primary history-text ">Riwayat Pesanan</a> </center>
                        </div>
                    </Col>
                    <Col md={8} className="right-column">
                        <div className="details-card">
                            <div className="detail-item">
                                <span className="detail-label">Email</span>
                                <span className="detail-content">miranda@example.com</span>
                            </div>
                            <hr />
                            <div className="detail-item">
                                <span className="detail-label">Phone</span>
                                <span className="detail-content">+62 123 4567 890</span>
                            </div>
                            <hr />
                            <div className="detail-item">
                                <span className="detail-label">Address</span>
                                <span className="detail-content">Jl. Example No. 123, Jakarta</span>
                            </div>
                            <hr />
                            <div className="detail-item">
                                <span className="detail-label">NIK</span>
                                <span className="detail-content">1234567890123456</span>
                            </div>
                            <hr />
                            <div className="buttons">
                                <Button variant="primary" className="edit-profile-button">
                                    Edit Profile
                                </Button>
                                <Button variant="danger" className="sign-out-button">
                                    Sign Out
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Profile;