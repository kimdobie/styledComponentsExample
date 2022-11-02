import React, { ReactElement } from 'react';
import { Card, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

const CustomCard = (): ReactElement => (
  <Card>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card&apos;s content.
      </Card.Text>
      <Button variant='primary'>
        <Icon.HeartFill /> Go somewhere
      </Button>
    </Card.Body>
  </Card>
);

export default CustomCard;
