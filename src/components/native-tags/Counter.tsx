import React from 'react';

import './counter.scss';

const SimpleCounter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className='counter-wrapper'>
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
    </div>
  );
};

export default SimpleCounter;
