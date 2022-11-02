import React, { ReactElement } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import styled from 'styled-components';

const CardStyled = styled(Card)`
  width: 18rem;
  border: 3px solid blueviolet;
`;

const ButtonStyled = styled(Button)``;

const HeartStyled = styled(Icon.HeartFill)`
  ${ButtonStyled}:hover & {
    color: rebeccapurple;
  }
`;
// *** Main component ***
const CustomCard = (): ReactElement => (
  <>
    <CardStyled>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </Card.Text>
        <ButtonStyled variant='primary'>
          <HeartStyled /> Go somewhere
        </ButtonStyled>
      </Card.Body>
    </CardStyled>
    <Alert>Done version</Alert>
  </>
);

export default CustomCard;
