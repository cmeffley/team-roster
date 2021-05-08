import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Label,
  Input,
} from 'reactstrap';
import { addPlayer, updatePlayer } from '../helpers/data/PlayerData';

const PlayerForm = ({
  user,
  formTitle,
  setPlayers,
  name,
  imageUrl,
  position,
  country,
  firebaseKey,
  uid
}) => {
  const [player, setPlayer] = useState({
    name: name || '',
    imageUrl: imageUrl || '',
    position: position || '',
    country: country || '',
    firebaseKey: firebaseKey || null,
    uid: uid || user.uid
  });
  const history = useHistory();

  const handleInputChange = (e) => {
    setPlayer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (player.firebaseKey) {
      updatePlayer(player, user).then((playerArray) => setPlayers(playerArray));
    } else {
      addPlayer(player, user).then((playerArray) => setPlayers(playerArray));
      history.push('/team');

      setPlayer({
        name: '',
        imageUrl: '',
        position: '',
        country: '',
        firebaseKey: null
      });
    }
  };

  return (
    <div className='player-form'>
      <Form
      id='addPlayerForm'
      autoComplete='off'
      onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <Label>Name: </Label>
        <Input
          name="name"
          type="text"
          placeholder="Name"
          value={player.name}
          onChange={handleInputChange}
        >
        </Input>
        <Label>Image: </Label>
        <Input
          name="imageUrl"
          type="text"
          placeholder="Image Url"
          value={player.imageUrl}
          onChange={handleInputChange}
        >
        </Input>
        <Label>Position: </Label>
        <Input
          name="position"
          type="text"
          placeholder="Position"
          value={player.position}
          onChange={handleInputChange}
        >
        </Input>
        <Label>Country: </Label>
        <Input
          name="country"
          type="text"
          placeholder="Home Country"
          value={player.country}
          onChange={handleInputChange}
        >
        </Input>
        <Button color='success' type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

PlayerForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  user: PropTypes.any,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  position: PropTypes.string,
  country: PropTypes.string,
  firebaseKey: PropTypes.string,
  setPlayers: PropTypes.func.isRequired,
  uid: PropTypes.string
};

export default PlayerForm;
