import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Admin } from './Admin';
import { Login } from './Login';
import { ProtectedRoutes } from './ProtectedRoutes'; 
import '../Styles/App.css';

function App() {
  return (
    <Router>
      <div>
        <Route path="/login" component={Login} />
        <ProtectedRoutes path="/admin" component={Admin}></ProtectedRoutes>
      </div>
    </Router>
  );
}

export default App;
