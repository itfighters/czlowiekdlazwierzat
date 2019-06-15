import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './views/home';
import Notifications from './views/notifications';
import Header from './components/header';
import Tiles from './views/tiles';

function App() {
    return (
        <Router>
            <Header></Header>
            <Route exact path="/" component={Home} />
            <Route path="/notifications" component={Notifications} />
            <Route path='/tiles' component={Tiles} />
        </Router>
    );
}

export default App;
