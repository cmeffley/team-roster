import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from '../components/PlayerCard';

function Players({ players, setPlayers, user }) {
  return (
    <div id='cardContainer'>
      {players.map((playerInfo) => (
        <PlayerCard
          key={playerInfo.firebaseKey}
          firebaseKey={playerInfo.firebaseKey}
          name={playerInfo.name}
          imageUrl={playerInfo.imageUrl}
          position={playerInfo.position}
          country={playerInfo.country}
          uid={playerInfo.uid}
          setPlayers={setPlayers}
          user={user}
        />
      ))}
    </div>
  );
}

Players.propTypes = {
  players: PropTypes.array.isRequired,
  setPlayers: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default Players;
