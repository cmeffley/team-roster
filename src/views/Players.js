import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from '../components/PlayerCard';

function Players({ player, setPlayer }) {
  return (
    <div className='playerCardContainer'>
      {player.map((playerInfo) => (
        <PlayerCard
          key={playerInfo.firebaseKey}
          firebaseKey={playerInfo.firebaseKey}
          name={playerInfo.name}
          imageUrl={playerInfo.imageUrl}
          position={playerInfo.position}
          country={playerInfo.country}
          setPlayer={setPlayer}
        />
      ))}
    </div>
  );
}

Players.propTypes = {
  player: PropTypes.array.isRequired,
  setPlayer: PropTypes.func.isRequired
};

export default Players;
