import React, { useState } from 'react';
import {
  Button,
  Form,
  Label,
  Input,
} from 'reactstrap';

const PlayerForm = () => {
  const [player, setPlayer] = useState({
    name: '',
    imageUrl: '',
    position: '',
    country: ''
  });
  console.warn(setPlayer);
  return (
    <div className='player-form'>
      <Form>
        <h2>Add Player</h2>
        <Label>Name: </Label>
        <Input
          name="name"
          type="text"
          placeholder="Name"
          value={player.name}
        >
        </Input>
        <Label>Image: </Label>
        <Input
          name="imageUrl"
          type="text"
          placeholder="Image Url"
          value={player.imageUrl}
        >
        </Input>
        <Label>Position: </Label>
        <Input
          name="position"
          type="text"
          placeholder="Position"
          value={player.position}
        >
        </Input>
        <Label>Country: </Label>
        <Input
          name="country"
          type="text"
          placeholder="Home Country"
          value={player.country}
        >
        </Input>
        <Button color='success' type='submit'>Add Player</Button>
      </Form>
    </div>
  );
};

export default PlayerForm;
