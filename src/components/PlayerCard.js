import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardText,
  CardImg,
  CardBody,
  CardTitle
} from 'reactstrap';

export default function PlayerCard({
  name,
  imageUrl,
  position,
  country
}) {
  return (
    <div>
      <Card>
        <CardTitle tag='h5'>{name}</CardTitle>
        <CardBody>
          <CardImg id='playerImage' src={imageUrl} />
          <CardText>{position}</CardText>
          <CardText>{country}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

PlayerCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
};
