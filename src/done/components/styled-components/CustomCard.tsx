import React, { ReactElement } from 'react';
import { Card, Button, CardProps } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import styled from 'styled-components';

// See https://styled-components.com/docs/api#typescript
// This doesn't show the passing of props due to an issue
// with react-bootstrap
const CardStyled = styled(Card)<CardProps>`
  width: 18rem;
  border: 3px solid blueviolet;
`;

const ButtonStyled = styled(Button)``;

const HeartStyled = styled(Icon.HeartFill)`
  ${ButtonStyled}:hover & {
    color: rebeccapurple;
  }
`;

// In order for a styled prop to work, it needs to accept and pass down
// class name
type TextProps = {
  message: string;
  className?: string;
};
const Text = ({ className, message }: TextProps) => (
  <p className={className}>{message}</p>
);

// Passing along the Props doesn't seem to be needed
// validation appears to work without it
const TextStyled = styled(Text)<TextProps>`
  font-style: italic;
  color: darkviolet;
`;

const CustomCard = (): ReactElement => (
  <CardStyled>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <TextStyled
        message="Some quick example text to build on the card title and make up the bulk
        of the card's content."
      />
      <ButtonStyled variant='primary'>
        <HeartStyled /> Go somewhere
      </ButtonStyled>
    </Card.Body>
  </CardStyled>
);

export default CustomCard;
