import React, { ReactElement } from 'react';
import { Row, Col } from 'react-bootstrap';
import AlertBoxesStart from '../components/control-props/AlertBoxes';
import AlertBoxesDone from '../done/components/control-props/AlertBoxes';

const AlertBoxes =
  process.env.REACT_APP_USE_DONE === 'false' ? AlertBoxesStart : AlertBoxesDone;

const LocalStyles = (): ReactElement => (
  <Row>
    <Col>
      <h1>Controlling props</h1>
      <code>
        src/pages/ControlProps.tsx AND
        src/components/control-props/AlertBoxes.tsx
      </code>
      <AlertBoxes />
    </Col>
  </Row>
);

export default LocalStyles;
