import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log('user 설정됨');
    console.log(user);
    return () => {
      console.log('user가 바뀌기 전');
      console.log(user);
    };
  },[user]);

  return (
    <div>
      <b style={{cursor: 'pointer', color: user.active ? 'red' : 'black'}} onClick={() => onToggle(user.id)}>{user.username}</b>
      <span>({user.number})</span>
      <button onClick={() => onRemove(user.id)}>delete</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  )
}

export default UserList;