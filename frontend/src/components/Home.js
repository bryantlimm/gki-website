import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => (
  <div className="home" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/background1.jpg)` }}>
    <div className="main-content">
      <img src={`${process.env.PUBLIC_URL}/image1.jpg`} alt="Man" className="main-image" />
        <div className="schedule">
            <div className="schedule-details">
                <h2>Jadwal Ibadah Minggu</h2>
                <p>Kebaktian Umum 1: <strong>07.30 WIB</strong></p>
                <p>Kebaktian Umum 2: <strong>10.00 WIB</strong></p>

                {/* tombollll */}
                <div className="button-container">
                    <Link to="/schedule" className="schedule-link">Jadwal Lain</Link>
                    <a href="https://maps.app.goo.gl/dE9qv7ZyCrsoFYHc7" target="_blank" rel="noopener noreferrer" className="location-link">Lokasi Gereja</a>
                </div>
            </div>
        </div>
    </div>
    <div className="vision-mission">
      <div className="vision-mission-text">
        <h3>Visi Kami</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Blandit nascetur volutpat dictumst at nibh maecenas morbi suspendisse convallis.</p>
        <h3>Misi Kami</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Blandit nascetur volutpat dictumst at nibh maecenas morbi suspendisse convallis.</p>
      </div>
      <img src={`${process.env.PUBLIC_URL}/image2.jpg`} alt="Vision Mission" />
    </div>
    <div className="bible-ayat">
        {/* AYAT DISINI */}
        <div className="bible-ayat-text">
            <h3>Matius 11: 28</h3>
            <p>Datanglah kepada-Ku, hai semua yang berjerih lelah dan berbeban berat, dan Aku akan memberimu kelegaan.</p>
        </div>
    </div>
  </div>
);

export default Home;
