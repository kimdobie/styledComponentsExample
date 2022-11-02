import React, { ReactElement } from 'react';
import { Row, Col } from 'react-bootstrap';
import BlueBox from '../components/local-styles/BlueBox';

const LocalStyles = (): ReactElement => (
  <Row>
    <Col>
      <h1>Local Styles</h1>
      <code>
        src/pages/LocalStyles.tsx AND src/components/local-styles/BlueBox.tsx
      </code>
      <BlueBox></BlueBox>
    </Col>
  </Row>
);

export default LocalStyles;
