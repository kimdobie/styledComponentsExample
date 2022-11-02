import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CounterStart from '../components/native-tags/Counter';
import CounterDone from '../done/components/native-tags/Counter';

const Counter =
  process.env.REACT_APP_USE_DONE === 'false' ? CounterStart : CounterDone;

const NativeTagsStyled = () => (
  <Row>
    <Col>
      <h1>Style Native Tags</h1>
      <code>
        src/pages/NativeTagsStyled.tsx AND
        src/components/native-tags/Counter.tsx
      </code>
      <Counter />
    </Col>
  </Row>
);

export default NativeTagsStyled;
