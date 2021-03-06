import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import NavBar from '../components/NavBar';
import { getTeam } from '../helpers/data/PlayerData';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [players, setPlayers] = useState([]);
  const [user, setUser] = useState(null);

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
        getTeam(userInfoObject).then((response) => setPlayers(response));
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
            players={players}
            setPlayers={setPlayers}
          />
        </div>
      </Router>
    </>
  );
}

export default App;
