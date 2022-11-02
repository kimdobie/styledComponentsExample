import React, { ReactElement } from 'react';
import { Row, Col } from 'react-bootstrap';
import CustomCardStart from '../components/styled-components/CustomCard';
import CustomCardDone from '../done/components/styled-components/CustomCard';

const CustomCard =
  process.env.REACT_APP_USE_DONE === 'false' ? CustomCardStart : CustomCardDone;

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
