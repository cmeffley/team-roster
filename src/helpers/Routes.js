import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Players from '../views/Players';

export default function Routes({ players, setPlayers }) {
  return (
    <div>
      <Switch>
        <Route exact path='/'
          component={Home}
        />
        <Route path='/player'
          component={() => <Players players={players} setPlayers={setPlayers} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  players: PropTypes.array,
  setPlayers: PropTypes.func
};
