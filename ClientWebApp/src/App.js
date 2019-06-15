import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import SingUp from "./views/singUp";

import Home from './views/home';
import Notifications from './views/notifications';
import Header from './components/header';

function App() {
    return (
        <Router>
            <Header></Header>
            <Route exact path="/" component={Home} />
            <Route path="/notifications" component={Notifications} />
            <Route path="/singUp" component={SingUp} />
        </Router>
    );
}

export default App;
