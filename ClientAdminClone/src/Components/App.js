import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Admin } from './Admin';
import AddForm from './AddForm';
import updateForm from './upadateForm';
import Login from './Login';
import { ProtectedRoutes } from './ProtectedRoutes';
import '../Styles/App.css';
import SmsBox from './SmsBox';
import EmailBox from './EmailBox';
import PushBox from './PushBox';

function App() {
  return (
    <Router>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Login}/>
        <ProtectedRoutes path="/admin" component={Admin} />
      </div>
    </Router>
  );
}

export default App;
