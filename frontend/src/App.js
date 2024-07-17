import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Schedule from './components/Schedule';
import Bulletin from './components/Bulletin';
import Admin from './components/Admin';
import Footer from './components/Footer';

const App = () => (
    <Router>
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/bulletins" element={<Bulletin />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
            <Footer />
        </div>
    </Router>
);

export default App;
