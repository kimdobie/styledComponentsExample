import React from 'react';

// import styled from 'styled-components';

import {
  Counter,
  Label,
  Value,
  Buttons,
  AddButton,
  SubtractButton,
} from './CounterStyled';

const SimpleCounter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <Counter>
      <Label>Counter</Label>
      <Value>{count}</Value>
      <Buttons>
        <AddButton onClick={() => setCount(count + 1)} />
        <SubtractButton onClick={() => setCount(count - 1)} />
      </Buttons>
    </Counter>
  );
};

export default SimpleCounter;
