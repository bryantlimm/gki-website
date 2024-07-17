import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Schedule from './components/Schedule';
import Bulletin from './components/Bulletin';
import Admin from './components/Admin';

const App = () => (
    <Router>
        <div>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/schedule" component={Schedule} />
                <Route path="/bulletins" component={Bulletin} />
                <Route path="/admin" component={Admin} />
            </Switch>
        </div>
    </Router>
);

export default App;
