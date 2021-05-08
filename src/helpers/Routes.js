import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Players from '../views/Players';
import AddPlayers from '../views/AddPlayers';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (routing) => (user
    ? (<Component {...routing} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: routing.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};

export default function Routes({ players, setPlayers, user }) {
  return (
    <div>
      <Switch>
        <Route
          exact path='/'
          component={() => <Home user={user}/>}
        />
        <PrivateRoute
          user={user}
          path='/team'
          component={() => <Players players={players} setPlayers={setPlayers}
          user={user} />}
        />
        <PrivateRoute
        user={user}
        path='/add-player'
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
