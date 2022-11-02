import React, { ReactElement } from 'react';
import { Row, Col } from 'react-bootstrap';
import CustomCard from '../components/styled-components/CustomCard';

const OtherComponent = (): ReactElement => (
  <Row>
    <Col>
      <h1>Style Other Components</h1>
      <code>
        src/pagesOtherComponents.tsx AND
        src/components/styled-components/CustomCard.tsx
      </code>
      <CustomCard />
    </Col>
  </Row>
);

export default OtherComponent;
