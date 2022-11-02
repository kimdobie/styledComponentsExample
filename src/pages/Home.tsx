import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const Home = () => (
  <Row data-testid='homePageContainer'>
    <Col>
      <Card bg='secondary' text='white'>
        <Card.Body>
          <h1>Styled Components Examples </h1>
          <p>This repo was made to give a demo of styled-components</p>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <p>Helpful links:</p>
          <ul>
            <li>
              <a href='https://styled-components.com/'>
                Styled Components homepage
              </a>
            </li>
            <li>
              <a href='https://www.npmjs.com/package/styled-components'>
                Styled Components NPM page
              </a>
            </li>
            <li>
              <a href='https://styled-components.com/docs/advanced#tagged-template-literals'>
                Tagged template literals information
              </a>
            </li>
            <li>
              <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates'>
                Tagged template literals MDN page
              </a>
            </li>
          </ul>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default Home;
