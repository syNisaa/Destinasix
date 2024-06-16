// src/components/BusPayment.js
import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "../../css/Pembayaranflight.css"; // Pastikan file CSS ini ada

const pembayaranFlight = () => {
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
                                <h2>
                                    <b>Trip To Medan</b>
                                </h2>
                                <p className="text-muted">Depart Sat, June 1 | Duration 2h 30min</p>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <p>15.00 | <b>HLP Jakarta Halim Perdanakusuma International Airport</b></p>
                                        <p>17.30 | <b>KNO Medan Kualanamu International Airport</b></p>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <h5>Your Ticket</h5>
                        <Card className="mb-3">
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <h6><b>Baggage Allowance</b></h6>
                                        <h6>Carryo-n Baggage : Included</h6>
                                        <h6>Checked Baggage : 1x20kg</h6>
                                    </Col>
                                    <Col className="">
                                        <h6>Policies</h6>
                                        <h6><b>Non-refundable</b></h6>
                                        <h6><b>Changes not permitted</b></h6>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <Card className="mb-3">
                            <Card.Header>
                                <h5>
                                    <b>Contact Detail</b>
                                </h5>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col md={4}>
                                            <Form.Group controlId="formName" className="mb-3">
                                                <Form.Control type="text" placeholder="Name" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group controlId="formEmail" className="mb-3">
                                                <Form.Control type="email" placeholder="Email" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group controlId="formPhone" className="mb-3">
                                                <Form.Control type="text" placeholder="Mobile Phone" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>

                        <Card className="mb-3">
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <h5>Total</h5>
                                    </Col>
                                    <Col className="text-end">
                                        <h5>IDR 750,000</h5>
                                    </Col>
                                </Row>
                                <Button href="/pembayaranFlight2" variant="primary" block>
                                    Pay
                                </Button>
                                <Button className="mt-2" href="/flightUser" variant="secondary" block>
                                    Back
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card>
                            <Card.Header>
                                <h5>
                                    <b>Price Details</b>
                                </h5>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <b>Ticket (1 adult)</b>
                                    </Col>
                                    <Col className="text-end">
                                        <b>IDR 750,000</b>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <b>Baggage</b>
                                    </Col>
                                    <Col className="text-end">
                                        <b>None</b>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Personal Item
                                    </Col>
                                    <Col className="text-end">
                                        <b>Free</b>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Carry on Baggage 
                                    </Col>
                                    <Col className="text-end">
                                        <b>Free</b>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Checked Baggage (1x20kg)
                                    </Col>
                                    <Col className="text-end">
                                        <b>Free</b>
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col>Total</Col>
                                    <Col className="text-end">IDR 750,000</Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default pembayaranFlight;