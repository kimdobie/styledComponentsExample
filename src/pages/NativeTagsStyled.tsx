import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Counter from '../components/native-tags/Counter';

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
