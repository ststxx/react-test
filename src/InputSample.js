import React, { useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    id: '',
    pw: '',
  });

  const { id, pw } = inputs;
  
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onReset = () => {
    setInputs({
      id: '',
      pw: '',
    });
  };

  return (
    <div>
      <input name="id" onChange={onChange} value={id} placeholder="이름" />
      <input name="pw" onChange={onChange} value={pw} placeholder="닉네임" />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {id} ({pw})
      </div>
    </div>
  );
}

export default InputSample;