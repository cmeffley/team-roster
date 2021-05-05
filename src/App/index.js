import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import NavBar from '../components/NavBar';
import getTeam from '../helpers/data/PlayerData';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [player, setPlayer] = useState([]);
  const [user, setUser] = useState(null);
  console.warn(player);

  useEffect(() => {
    getTeam().then((response) => setPlayer(response));
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObject = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userInfoObject);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      <Router>
        <div className='App'>
          <NavBar user={user}/>
          <Routes
            user={user}
            player={player}
            setPlayer={setPlayer}
          />
        </div>
      </Router>
    </>
  );
}

export default App;
