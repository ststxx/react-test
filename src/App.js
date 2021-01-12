import React, { useState, useRef } from 'react';
import CreateUser from './CreateUser';
import InputSample from './InputSample';
import UserList from './UserList';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    number: '',
  });

  const { username, number } = inputs;

  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({...inputs, [name]: value});
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'user1',
      number: 1,
      active: true,
    },
    {
      id: 2,
      username: 'user2',
      number: 2,
      active: false,
    },
    {
      id: 3,
      username: 'user3',
      number: 3,
      active: false,
    }
  ]);

  const nextId = useRef(4);
  
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      number,
    };
    setUsers([...users, user]);

    setInputs({
      username: '',
      number: '',
    });
    nextId.current += 1;
    console.log(nextId);
  };

  const onRemove = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(users.map(user => user.id === id ? { ...user, active: !user.active } : user))
  };

  return (
    <>
      <CreateUser username={username} number={number} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
    );
}

export default App;
