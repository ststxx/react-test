import React, { useState, useRef } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    id: '',
    pw: '',
  });
  const [result, setResult] = useState('');
  
  const idInput = useRef();

  const { id, pw } = inputs;

  const onChange = (e) => {
    const {name, value} = e.target;
    
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const onReset = () => {
    setInputs({
      id: '',
      pw: '',
    });
    idInput.current.focus();
  }

  const onSubmit = () => {
    setResult(idInput.current.value);
  };

  return (
    <div>
      <input name="id" ref={idInput} onChange={onChange} placeholder="id" value={id} />
      <input name="pw" onChange={onChange} placeholder="pw" value={pw} />
      <button onClick={onReset}>reset</button>
      <button onClick={onSubmit}>result</button>
      <div>
        <b>값: </b>
        {id} ({pw})
        <p>result: {result}</p>
      </div>
    </div>
  ); 
}

export default InputSample;