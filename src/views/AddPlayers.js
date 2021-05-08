import React from 'react';
import PropTypes from 'prop-types';
import PlayerForm from '../components/PlayerForm';

function AddPlayers({ user, setPlayers }) {
  return (
    <div>
      <PlayerForm
        formTitle='Add a Player'
        user={user}
        setPlayers={setPlayers}
      />
    </div>
  );
}

AddPlayers.propTypes = {
  user: PropTypes.any,
  setPlayers: PropTypes.func
};

export default AddPlayers;
