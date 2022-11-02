import React, { ReactElement } from 'react';
// import './bluebox.css'; // Need to keep commented otherwise it will bleed into undone version

const BlueBox = (): ReactElement => (
  <>
    <div className='bluebox'>This is a blue box</div>
    <div className='circlebox'>This is a circle box</div>
  </>
);

export default BlueBox;
