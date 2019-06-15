import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Admin } from './Admin';
import AddForm from './AddForm';
import updateForm from './upadateForm';
import Login from './Login';
import { ProtectedRoutes } from './ProtectedRoutes'; 
import '../Styles/App.css';

function App() {
  return (
    <Router>
      <div>
        <Route path="/login" component={Login} />
        <ProtectedRoutes path="/admin" component={Admin}></ProtectedRoutes>
        <Route path='/addform' component={AddForm} />
        <Route path='/updateform' component={updateForm} />
      </div>
    </Router>
  );
}

export default App;
