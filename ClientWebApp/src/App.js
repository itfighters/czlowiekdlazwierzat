import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './views/home';
import Notifications from './views/notifications';
import Loader from './components/loader'

function App() {
    return (
        <div>
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/notifications" component={Notifications} />
            </Router>
            <Loader visible={true}/>
        </div>
    );
}

export default App;
