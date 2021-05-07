import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Players from '../views/Players';
import AddPlayers from '../views/AddPlayers';

export default function Routes({ players, setPlayers, user }) {
  return (
    <div>
      <Switch>
        <Route exact path='/'
          component={Home}
        />
        <Route path='/player'
          component={() => <Players players={players} setPlayers={setPlayers}
          user={user} />}
        />
        <Route path='/add-player'
        component={() => <AddPlayers setPlayers={setPlayers} user={user} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  players: PropTypes.array,
  setPlayers: PropTypes.func,
  user: PropTypes.any
};
