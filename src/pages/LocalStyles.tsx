import React, { ReactElement } from 'react';
import { Row, Col } from 'react-bootstrap';
import BlueBoxStart from '../components/local-styles/BlueBox';
import BlueBoxDone from '../done/components/local-styles/BlueBox';

const BlueBox =
  process.env.REACT_APP_USE_DONE === 'false' ? BlueBoxStart : BlueBoxDone;

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
