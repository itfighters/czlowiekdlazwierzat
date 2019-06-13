import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './views/home';
import Notifications from './views/notifications';

function App() {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/notifications" component={Notifications} />
        </Router>
    );
}

export default App;
