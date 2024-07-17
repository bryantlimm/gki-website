import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
    const backgroundImage = `${process.env.PUBLIC_URL}/background2.jpg`;
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const [bulletins, setBulletins] = useState([]);
    const [newBulletin, setNewBulletin] = useState({ title: '', text: '', photo: '' });
    const [fileName, setFileName] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('/api/admin-login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ password })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            if (data.authenticated) {
                setAuthenticated(true);
            } else {
                alert(data.message || 'Wrong password');
            }
        } catch (error) {
            console.error('Error during authentication:', error);
            alert('An error occurred during authentication');
        }
    };

    useEffect(() => {
        if (authenticated) {
            fetchBulletins();
        }
    }, [authenticated]);

    const fetchBulletins = async () => {
        const response = await axios.get('/api/bulletins');
        setBulletins(response.data);
    };

    const handleCreate = async () => {
        const formData = new FormData();
        formData.append('title', newBulletin.title);
        formData.append('text', newBulletin.text);
        if (newBulletin.photo) {
            formData.append('photo', newBulletin.photo);
        }

        await axios.post('/api/bulletins', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        setNewBulletin({ title: '', text: '', photo: '' });
        setFileName('');
        fetchBulletins();
    };

    const handleDelete = async (id) => {
        await axios.delete(`/api/bulletins/${id}`);
        fetchBulletins();
    };

    const handleUpdate = async (id) => {
        const formData = new FormData();
        formData.append('title', newBulletin.title);
        formData.append('text', newBulletin.text);
        if (newBulletin.photo) {
            formData.append('photo', newBulletin.photo);
        }

        try {
            const response = await axios.put(`/api/bulletins/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Update successful:', response.data);
            fetchBulletins();
        } catch (error) {
            console.error('Error updating bulletin:', error);
            alert('An error occurred during the update');
        }
    };

    return (
        <div className="admin-page">
            <div className="admin-title" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <h2>Admin Panel</h2>
            </div>
            {!authenticated ? (
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Enter Password"
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <input
                            type="text"
                            value={newBulletin.title}
                            onChange={e => setNewBulletin({ ...newBulletin, title: e.target.value })}
                            placeholder="Title"
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            value={newBulletin.text}
                            onChange={e => setNewBulletin({ ...newBulletin, text: e.target.value })}
                            placeholder="Text"
                        />
                    </div>
                    <div className="upload-buttons">
                        <input
                            type="file"
                            id="file-upload"
                            onChange={e => {
                                setNewBulletin({ ...newBulletin, photo: e.target.files[0] });
                                setFileName(e.target.files[0].name);
                            }}
                        />
                        <label htmlFor="file-upload">{fileName || 'Choose File'}</label>
                        <button onClick={handleCreate}>Upload</button>
                    </div>
                    <div className="bulletins">
                        {bulletins.map(bulletin => (
                            <div key={bulletin.id} className="bulletin-card">
                                <img src={bulletin.photo} alt={bulletin.title} />
                                <div className="bulletin-card-content">
                                    <h3>{bulletin.title}</h3>
                                    <p>{bulletin.text}</p>
                                    <button onClick={() => handleDelete(bulletin.id)}>Delete</button>
                                    <button onClick={() => handleUpdate(bulletin.id)}>Update</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Admin;
