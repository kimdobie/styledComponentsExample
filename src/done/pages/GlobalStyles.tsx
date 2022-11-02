import React, { ReactElement } from 'react';
import { Row, Col } from 'react-bootstrap';

// import '../../scss/_custom.scss';

/*
.an-un-used-style-global 

Isn't used - but we don't know that.
Even if not used, is is included in the bundled css given to the browser
*/

const GlobalStyles = (): ReactElement => (
  <Row>
    <Col>
      <h1>Global Styles</h1>
      <code>src/pages/GlobalStyles.tsx</code>

      {/* We can assume that this has a file, but can't be sure */}
      <div className='global-styles-wrapper'>
        <p>This is a box with styles from global stylesheet.</p>
      </div>

      {/* We don't have any idea if this has styles */}
      <section>This is a section</section>

      {/* Where is this?? It isn't in the main CSS */}
      <div className='no-style'>I should not have a style</div>
    </Col>
  </Row>
);

export default GlobalStyles;
