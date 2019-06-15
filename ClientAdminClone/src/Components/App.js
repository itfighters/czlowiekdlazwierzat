import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Admin } from './Admin';
import { Login } from './Login';
import { ProtectedRoutes } from './ProtectedRoutes';
import { List } from './List';
import '../Styles/App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoutes path="/admin" component={Admin}></ProtectedRoutes>
          
          <Route component={List} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
