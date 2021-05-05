import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Players from '../views/Players';

export default function Routes({ player, setPlayers }) {
  return (
    <div>
      <Switch>
        <Route exact path='/'
          component={Home}
        />
        <Route path='/player'
          component={() => <Players player={player} setPlayers={setPlayers} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  player: PropTypes.array,
  setPlayers: PropTypes.func
};
