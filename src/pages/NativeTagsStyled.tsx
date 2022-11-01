import React from 'react';

// import styled from 'styled-components';
// import './tempStyles.scss';

import {
  Counter,
  Label,
  Value,
  Buttons,
  AddButton,
  SubtractButton,
} from './TempStyled';

const NativeTagsStyled = () => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      {/* <div className='counter-wrapper'>
        <div className='counter-label'>Counter</div>
        <div className='counter-value'>{count}</div>
        <div className='counter-button-wrapper'>
          <button
            onClick={() => setCount(count + 1)}
            className='counter-button-add'
          />
          <button
            onClick={() => setCount(count - 1)}
            className='counter-button-subtract'
          />
        </div>
      </div> */}

      <Counter>
        <Label>Counter</Label>
        <Value>{count}</Value>
        <Buttons>
          <AddButton onClick={() => setCount(count + 1)} />
          <SubtractButton onClick={() => setCount(count - 1)} />
        </Buttons>
      </Counter>
    </>
  );
};

export default NativeTagsStyled;
