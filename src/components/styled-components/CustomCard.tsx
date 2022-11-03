import React, { ReactElement } from 'react';
import { Card, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

type TextProps = {
  message: string;
};
const Text = ({ message }: TextProps) => <p>{message}</p>;

const CustomCard = (): ReactElement => (
  <Card>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Text
        message="Some quick example text to build on the card title and make up the bulk
        of the card's content."
      />
      <Button variant='primary'>
        <Icon.HeartFill /> Go somewhere
      </Button>
    </Card.Body>
  </Card>
);

export default CustomCard;
