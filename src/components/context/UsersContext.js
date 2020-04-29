import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();
export default UserContext;

export const UserProvider = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // res.data : donne un arrays of object
    axios.get('https://api.github.com/users').then((res) => setUsers(res.data));
  });

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
