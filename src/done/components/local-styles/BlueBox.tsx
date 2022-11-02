import React, { ReactElement } from 'react';
import { Alert } from 'react-bootstrap';
import './bluebox.css';

const BlueBox = (): ReactElement => (
  <>
    <div className='bluebox'>This is a blue box</div>
    <div className='circlebox'>This is a circle box</div>
    <Alert>Done version</Alert>
  </>
);

export default BlueBox;
