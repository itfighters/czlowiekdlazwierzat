import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Admin } from './Admin';
import Login from './Login';
import { ProtectedRoutes } from './ProtectedRoutes';
import '../Styles/App.css';
import { Header } from './Header';

function App() {
  return (
    <Router>
    <Header/>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Login}/>
        <ProtectedRoutes path="/admin" component={Admin} />
      </div>
    </Router>
  );
}

export default App;
