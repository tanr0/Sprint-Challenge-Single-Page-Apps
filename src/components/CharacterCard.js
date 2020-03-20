import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const CharacterCard = props =>{
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.species}</CardSubtitle>
          <CardText>Hi! My name is {props.name} and I am a {props.species} and currently {props.status}</CardText>
        </CardBody>
      </Card>
      <br />
    </div>
  )
  }

export default CharacterCard;