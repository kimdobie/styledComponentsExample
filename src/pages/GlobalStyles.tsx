import React, { ReactElement } from 'react';
import { Row, Col } from 'react-bootstrap';

const GlobalStyles = (): ReactElement => (
  <Row>
    <Col>
      <h1>Global Styles</h1>
      <code>src/pages/GlobalStyles.tsx</code>

      <div className='global-styles-wrapper'>
        <p>This is a box with styles from global stylesheet.</p>
      </div>

      <section>This is a section</section>

      <div className='no-style'>I have no style</div>
    </Col>
  </Row>
);

export default GlobalStyles;
