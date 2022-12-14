// Contains routing and any application wide items like headers, footers and navigation

import React, { ReactElement } from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom'; // Use `HashRouter as Router` when you can't control the URL ... like GitHub pages
import { Container, Card, Alert } from 'react-bootstrap';

const Router =
  process.env.REACT_APP_USE_HASH_ROUTER === 'true' ? HashRouter : BrowserRouter;

import AppNavBar from './AppNavBar';
import AppRoutes from './AppRoutes';

import './scss/index.scss';

const Header = (): ReactElement => (
  <header data-testid='header'>
    <Card bg='dark' text='white'>
      <Card.Body>
        <Card.Title>Sample react application</Card.Title>
      </Card.Body>
    </Card>
  </header>
);

const Footer = (): ReactElement => <footer></footer>;

const App = (): ReactElement => {
  const basename = '';

  return (
    <>
      <Router basename={basename}>
        <Header />
        <AppNavBar />
        <Container>
          <main>
            {process.env.REACT_APP_USE_DONE === 'true' ? (
              <Alert>Viewing done version</Alert>
            ) : null}
            <AppRoutes />
          </main>
        </Container>
        <Footer />
      </Router>
    </>
  );
};

export default App;
