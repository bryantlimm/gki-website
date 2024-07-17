import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Bulletin.css';

const Bulletin = () => {
  const [bulletins, setBulletins] = useState([]);
  const [selectedBulletin, setSelectedBulletin] = useState(null);

  useEffect(() => {
    const fetchBulletins = async () => {
      try {
        const response = await axios.get('/api/bulletins');
        setBulletins(response.data);
      } catch (error) {
        console.error('Error fetching bulletins:', error);
      }
    };

    fetchBulletins();
  }, []);

  return (
    <div className="bulletin-page">
      <h1>Warta Jemaat</h1>
      <div className="bulletins">
        {bulletins.map((bulletin) => (
          <div
            key={bulletin.id}
            className="bulletin-card"
            onClick={() => setSelectedBulletin(bulletin)}
          >
            <h2>{bulletin.title}</h2>
            <p className="bulletin-date">{new Date(bulletin.date).toLocaleDateString()}</p>
            <p>{bulletin.text}</p>
            {bulletin.photo && <img src={bulletin.photo} alt={bulletin.title} />}
          </div>
        ))}
      </div>
      {selectedBulletin && (
        <div className="bulletin-popup">
          <div className="bulletin-popup-content">
            <button onClick={() => setSelectedBulletin(null)}>Close</button>
            <h2>{selectedBulletin.title}</h2>
            <p className="bulletin-date">{new Date(selectedBulletin.date).toLocaleDateString()}</p>
            <p>{selectedBulletin.text}</p>
            {selectedBulletin.photo && <img src={selectedBulletin.photo} alt={selectedBulletin.title} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Bulletin;
