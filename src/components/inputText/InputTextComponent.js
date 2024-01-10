import React from 'react';
import { useDispatch } from 'react-redux';
import { updateValue } from '../../actions/actions';
import '../inputText/InputText.css';

const InputTextComponent = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const value = e.target.value;
    dispatch(updateValue(value));
  };

  return (
    <div className='inputBox'>
        <div className='inputLabel'>Input Text</div>
        <input
            className='inputText'
            type="text"
            onChange={handleInputChange}
            placeholder="Type something..."
        />
    </div>
  );
};

export default InputTextComponent;
