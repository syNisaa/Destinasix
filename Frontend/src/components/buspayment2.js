
// src/components/BusPayment.js
import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "../css/buspayment.css"; // Pastikan file CSS ini ada

const BusPayment = () => {
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

            <Container className="bus-payment mt-5">
                <Row>
                    <Col md={8}>
                        <Card className="mb-3">
                            <Card.Header>
                                <h5>Select a Payment Method</h5>
                            </Card.Header>
                            <Card.Body>
                                <div className="payment-method">
                                    <h6>Bank Transfer</h6>
                                    <div className="bank-options">
                                        {/* <Image src="/img/payment/bri-logo.png" alt="BRI" className="bank-logo" />
                    <Image src="/path/to/bri-logo.png" alt="BNI" className="bank-logo" />
                    <Image src="/path/to/bri-logo.png" alt="CIMB Niaga" className="bank-logo" />
                    <Image src="/path/to/bri-logo.png" alt="Mandiri" className="bank-logo" />
                    <Image src="/path/to/bri-logo.png" alt="BCA" className="bank-logo" /> */}
                                    </div>
                                </div>
                                <div className="payment-method">
                                    <h6>Credit/Debit Card</h6>
                                    <div className="card-options">
                                        {/* <Image src="/path/to/visa-logo.png" alt="Visa" className="card-logo" />
                    <Image src="/path/to/mastercard-logo.png" alt="Mastercard" className="card-logo" />
                    <Image src="/path/to/amex-logo.png" alt="American Express" className="card-logo" />
                    <Image src="/path/to/paypal-logo.png" alt="Paypal" className="card-logo" /> */}
                                    </div>
                                </div>
                                <div className="payment-method">
                                    <h6>OVO</h6>
                                    <div className="ovo-option">{/* <Image src="/path/to/ovo-logo.png" alt="OVO" className="ovo-logo" /> */}</div>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card className="mb-3">
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <h5>Total</h5>
                                    </Col>
                                    <Col className="text-end">
                                        <h5>IDR 150,000</h5>
                                    </Col>
                                </Row>
                                <Button variant="primary" block>
                                    Pay
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card>
                            <Card.Header>
                                <h5>Price Details</h5>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>Ticket (1 adult)</Col>
                                    <Col className="text-end">IDR 150,000</Col>
                                </Row>
                                <Row>
                                    <Col>Baggage</Col>
                                    <Col className="text-end">None</Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col>Total</Col>
                                    <Col className="text-end">IDR 150,000</Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BusPayment;
