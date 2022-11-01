import React, { ReactElement } from 'react';
import { Row, Col } from 'react-bootstrap';
import BlueBox from '../components/local-styles/BlueBox';

const LocalStyles = (): ReactElement => (
  <Row>
    <Col>
      <h1>Local Styles</h1>
      <BlueBox></BlueBox>
      <div>Some other random unstyled box </div>
    </Col>
  </Row>
);

export default LocalStyles;
