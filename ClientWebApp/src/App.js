import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './views/home';
import Notifications from './views/notifications';
import Header from './components/header';

function App() {
    return (
        <Router>
            <Header></Header>
            <Route exact path="/" component={Home} />
            <Route path="/notifications" component={Notifications} />
        </Router>
    );
}

export default App;
