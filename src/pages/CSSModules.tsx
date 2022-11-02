import React, { ReactElement } from 'react';
import { Row, Col } from 'react-bootstrap';

import FancyBoxes from '../components/css-modules/FancyBoxes';

const GlobalStyles = (): ReactElement => (
  <Row>
    <Col>
      <h1>CSS Modules</h1>
      <code>src/pages/CSSModules.tsx</code>
      <FancyBoxes />
    </Col>
  </Row>
);

export default GlobalStyles;
