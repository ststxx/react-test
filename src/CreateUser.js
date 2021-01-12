import React from 'react';

function CreateUser({ username, number, onChange, onCreate }) {
  return (
    <>
      <input name="username" onChange={onChange} value={username} placeholder="name" />
      <input name="number" onChange={onChange} value={number} placeholder="number" />
      <button onClick={onCreate}>Go</button>
    </>
  );
}

export default CreateUser;