import React from 'react';
import './Schedule.css'; // Import the corresponding CSS file for Schedule component

const Schedule = () => {
  const backgroundImage = `${process.env.PUBLIC_URL}/background2.jpg`;
  const sideImage = `${process.env.PUBLIC_URL}/image3.png`;

  return (
    <div className="schedule-page">
      <div className="schedule-title" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h2>Jadwal Ibadah</h2>
      </div>
      <div className="schedule-container">
        <div className="schedule-image">
          <img src={sideImage} alt="Schedule" />
        </div>
        <div className="schedule-content">
          <h3>Kebaktian Umum:</h3>
          <p>Setiap Minggu jam 07:30 dan 10:00</p>
          <h3>Sekolah Minggu:</h3>
          <p>Setiap Minggu jam 10:00</p>
          <h3>Youth & Boundless:</h3>
          <p>Setiap Sabtu jam 18:00</p>
          <h3>Firman & Doa:</h3>
          <p>Setiap Rabu jam 19:30</p>
          <h3>Doa Pagi:</h3>
          <p>Setiap Sabtu di minggu ke-2 jam 06:30</p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
