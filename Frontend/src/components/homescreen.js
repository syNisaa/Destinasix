import 'bootstrap/dist/css/bootstrap.min.css'; // Pastikan Bootstrap CSS diimpor
import React, { useEffect, useState } from 'react';
import pandawaBeach from '../assets/img/homescreen/pandawa-beach.png';
import '../css/homescreen.css'; // Pastikan ini mengarah ke file CSS yang benar

const HomeScreen = () => {
  const [background, setBackground] = useState('background1');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackground(prev => {
        const nextBackground = (parseInt(prev.slice(-1), 10) % 5) + 1; // Rotasi dari background1 sampai background5
        return `background${nextBackground}`;
      });
    }, 5000); // Ganti background setiap 5 detik

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`home-screen ${background}`}>
      <header className="header">
        <div className="logo">
          <span>DESTINA<span>6</span></span>
        </div>
        <nav className="nav-bar">
          <a href="/">Home</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
          <a href="/signin">Sign in</a>
        </nav>
      </header>
      <main className="container text-center mt-4">
        <h1 className='StartNew'>START YOUR TRIP with TRAVEL<span>6</span></h1>
        <div className="tab-navigation">
          <a href="/destination" >Destinations</a>
          <a href="/hotel">Hotels</a>
          <a href="/flight">Flight</a>
          <a href="/bus">Bus</a>
        </div>
        <div className="search-form">
          <input type="text" placeholder="Destination" className="form-control me-2" />
          <input type="date" className="form-control me-2" />
          <input type="date" className="form-control me-2" />
          <input type="text" placeholder="1 room, 2 adults, 0 children" className="form-control me-2" />
          <button className="btn btn-dark">SEARCH</button>
        </div>
        <section className="recommended-section">
          <div className="text-content">
            <h2>RECOMENDED</h2>
            <p className='judul'>Popular Beach in Indonesia</p>
            <h3>PANDAWA BEACH</h3>
            <p className='paragraf'>
              Pandawa Beach is one of the popular natural tourist destinations located in Bali Province.
              This beach has a panoramic view that spoils the eyes plus a calm and comfortable atmosphere
              like the Gods. The name of the beach located in Kutuh Village, South Kuta District, Badung
              Regency is taken from the five Mahabharata brothers consisting of Yudistira, Bima, Arjuna,
              Nakula, and Sadewa.
            </p>
          </div>
          <div className="image-content">
            <img src={pandawaBeach} alt="Pandawa Beach" className="img-fluid rounded-3" />
          </div>
        </section>

        <section className='button-expore'>
          <div className="bordered-div">
            <button>Explore</button>
            <div className="slider">
              <ul>
                <li className="active">1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="services-section">
          <h2><b> We Offer Best Services</b></h2>
          <div className="services-container">
            <div className="service-box">
              <img src="/path/to/icon1.png" alt="Tailored itineraries" />
              <h3>Tailored itineraries</h3>
              <p>Crafted to your preferences, our custom itineraries ensure every journey aligns with your unique travel style.</p>
            </div>
            <div className="service-box">
              <img src="/path/to/icon2.png" alt="Expert Guides" />
              <h3><b> Expert Guides </b></h3>
              <p>Our experienced guides lead you through immersive experiences, revealing the hidden gems and local secrets of each destination.</p>
            </div>
            <div className="service-box">
              <img src="/path/to/icon3.png" alt="Exclusive Experiences" />
              <h3><b>Exclusive Experiences</b></h3>
              <p>Access exclusive events, private tours, and VIP treatment, creating unforgettable memories tailored just for you.</p>
            </div>
            <div className="service-box">
              <img src="/path/to/icon4.png" alt="Seamless Travel Planning" />
              <h3><b> Seamless Travel Planning</b></h3>
              <p>From booking flights to arranging accommodations and activities, we handle every detail so you can relax and enjoy the journey stress-free.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomeScreen;
