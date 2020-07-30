// imports
import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import Navbar from './components/navbar';
import Routes from './config/routes';
import UserModel from './models/User';
import './App.css';

// primary component
function App(props) {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('uid'));
  const [userData, setUserData] = useState(localStorage.getItem('uid'));

  const storeUser = (userId) => {
    setCurrentUser(userId);
    localStorage.setItem('uid', userId);
  }

  const logout = (event) => {
    event.preventDefault();
    localStorage.removeItem('uid');
    setCurrentUser(null);
    props.history.push('/login');
  }

  useEffect(function() {
    UserModel.profile(currentUser).then((json) => {
      setUserData(json.user);
    });
  });

  return(
    <div>
      <Navbar userData={userData} currentUser={currentUser} />
      <Routes userData={userData} currentUser={currentUser} logout={logout} storeUser={storeUser} />
    </div>
  );
}

// exports
export default withRouter(App);