import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import '../css/faq.css';

const FAQ = () => {
    const [background, setBackground] = useState('background1');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBackground(prev => {
                const nextBackground = (parseInt(prev.slice(-1), 10) % 5) + 1;
                return `background${nextBackground}`;
            });
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={`home-screen ${background}`}>
            <header className="header">
                <div className="logo">
                    <span>DESTINA<span>6</span></span>
                </div>
                <nav className="nav-bar">
                    <a href="/homescreen">Home</a>
                    <a href="/faq"><u> FAQ </u></a>
                    <a href="/contact">Contact</a>
                    <a href="/signin">Sign in</a>
                </nav>
            </header>
            <main className="container text-center mt-4">
                <h1 className='StartNew'>We’re here to help<span>6</span></h1>
                <input type="text" placeholder="Search destinations..." />
                <div className="tab-navigation">
                    <a href="/destinations">Destinations</a>
                    <a href="/hotels">Hotels</a>
                    <a href="/flights">Flight</a>
                    <a href="/bus">Bus</a>
                </div>

                <div className="faq-section">
                    <h1>FAQ</h1>
                    <div className="faq-item">
                        <p>How do I create an account in this app?</p>
                        <button>+</button>
                    </div>
                    <div className="faq-item">
                        <p>Do I need to pay to use this app?</p>
                        <button>+</button>
                    </div>
                    <div className="faq-item">
                        <p>Bagaimana cara memesan tiket pesawat/hotel/tur melalui aplikasi ini?</p>
                        <button>+</button>
                    </div>
                    <div className="faq-item">
                        <p>Apa metode pembayaran yang tersedia?</p>
                        <button>+</button>
                    </div>
                    <div className="faq-item">
                        <p>How do I book a flight/hotel/tour through this app?</p>
                        <button>+</button>
                    </div>
                    <div className="faq-item">
                        <p>Are there any cancellation fees?</p>
                        <button>+</button>
                    </div>
                    <div className="faq-item">
                        <p>Is this app available in multiple languages?</p>
                        <button>+</button>
                    </div>
                    <div className="faq-item">
                        <p>Can I get help if there are problems with my trip?</p>
                        <button>+</button>
                    </div>
                    <div className="faq-item">
                        <p>How do I create an account in this app?</p>
                        <button>+</button>
                    </div>
                    <div className='still-stuck'>
                        <br></br>
                        <h2>Still Stuck? Help is a mall away</h2>
                    </div>
                    <div className='send-message'>
                        <button>send a message</button>
                    </div>
                </div>



                <section className="services-section">
                    <h2>We Offer Best Services</h2>
                    <div className="services-container">
                        <div className="service-box">
                            <img src="/path/to/icon1.png" alt="Tailored itineraries" />
                            <h3>Tailored itineraries</h3>
                            <p>Crafted to your preferences, our custom itineraries ensure every journey aligns with your unique travel style.</p>
                        </div>
                        <div className="service-box">
                            <img src="/path/to/icon2.png" alt="Expert Guides" />
                            <h3>Expert Guides</h3>
                            <p>Our experienced guides lead you through immersive experiences, revealing the hidden gems and local secrets of each destination.</p>
                        </div>
                        <div className="service-box">
                            <img src="/path/to/icon3.png" alt="Exclusive Experiences" />
                            <h3>Exclusive Experiences</h3>
                            <p>Access exclusive events, private tours, and VIP treatment, creating unforgettable memories tailored just for you.</p>
                        </div>
                        <div className="service-box">
                            <img src="/path/to/icon4.png" alt="Seamless Travel Planning" />
                            <h3>Seamless Travel Planning</h3>
                            <p>From booking flights to arranging accommodations and activities, we handle every detail so you can relax and enjoy the journey stress-free.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default FAQ;