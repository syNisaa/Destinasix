import 'bootstrap/dist/css/bootstrap.min.css'; // Pastikan Bootstrap CSS diimpor
import React, { useEffect, useState } from 'react';
import pandawaBeach from '../../assets/img/hotels/gmbr1.jpg';
import '../../css/homescreen.css'; // Pastikan ini mengarah ke file CSS yang benar

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
                    <a href="/profile">Profile</a>
                </nav>
            </header>
            <main className="container text-center mt-4">
                <h5 className='StartNew'>Welcome! <br /> START YOUR TRIP with TRAVEL<span>6</span></h5>
                <div className="tab-navigation">
                    <a href="/destinationUser" >Destinations</a>
                    <a href="/hotelUser">Hotels</a>
                    <a href="/flightUSer">Flight</a>
                    <a href="/busUSer">Bus</a>
                    <a href="/history">History</a>
                </div>
                <div className="search-form">
                    <input type="text" placeholder="Destination" className="form-control me-2" />
                    <input type="date" className="form-control me-2" />
                    <input type="date" className="form-control me-2" />
                    <input type="text" placeholder="1 room, 2 adults, 0 children" className="form-control me-2" />
                    <button className="btn btn-dark">SEARCH</button>
                </div>

                <section className="recommended-sectio">

                    <div className="card-group mt-3">
                        <div class="card">
                            <img src={pandawaBeach} alt="Pandawa Beach" className="img-fluid rounded-3" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                <a className='btn btn-outline-primary'>Show More</a>
                            </div>
                        </div>
                        <div class="card">
                            <img src={pandawaBeach} alt="Pandawa Beach" className="img-fluid rounded-3" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content. Spporting text below as a natural lead-in to additional content.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                <a className='btn btn-outline-primary'>Show More</a>
                            </div>
                        </div>
                        <div class="card">
                            <img src={pandawaBeach} alt="Pandawa Beach" className="img-fluid rounded-3" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show </p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                <a className='btn btn-outline-primary'>Show More</a>
                            </div>
                        </div>
                    </div>

                </section>

            </main>
        </div>
    );
};

export default HomeScreen;
