import React from 'react';
import { useSelector } from 'react-redux';
import '../displayText/DisplayText.css';

const DisplayComponent = () => {
  const value = useSelector((state) => state.value);

  return (
    <div>
      <div className='displayLabel'>Stored Text</div>
      <div className='resultValue'>
        Value from Redux store: <span className='value'>{value}</span>
      </div>
    </div>
  );
};

export default DisplayComponent;
