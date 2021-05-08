import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardText,
  CardImg,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';
import PlayerForm from './PlayerForm';
import { deletePlayer } from '../helpers/data/PlayerData';

const PlayerCard = ({
  firebaseKey,
  name,
  imageUrl,
  position,
  country,
  setPlayers,
  user,
  uid
}) => {
  const [edit, setEdit] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'edit':
        setEdit((prevState) => !prevState);
        break;
      case 'delete':
        deletePlayer(firebaseKey, user).then((playerArray) => setPlayers(playerArray));
        break;
      default:
        console.warn('Football is better than football');
    }
  };

  return (
    <div>
      <Card key={firebaseKey}
      id={uid}>
        <CardTitle tag='h5'>{name}</CardTitle>
        <CardBody>
          <CardImg id='playerImage' src={imageUrl} />
          <CardText>{position}</CardText>
          <CardText>{country}</CardText>
          <Button color='info' onClick={() => handleClick('edit')}>
            {edit ? 'Close Form' : 'Edit Form'}
          </Button>
          <Button color='danger' onClick={() => handleClick('delete')}>Delete Player</Button>
        </CardBody>
        {
          edit && <PlayerForm
          formTitle='Edit Player'
          setPlayers={setPlayers}
          firebaseKey={firebaseKey}
          name={name}
          imageUrl={imageUrl}
          position={position}
          country={country}
          user={user}
          uid={uid}
          />
        }
      </Card>
    </div>
  );
};

PlayerCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  firebaseKey: PropTypes.string.isRequired,
  setPlayers: PropTypes.func,
  user: PropTypes.any,
  uid: PropTypes.string
};

export default PlayerCard;
