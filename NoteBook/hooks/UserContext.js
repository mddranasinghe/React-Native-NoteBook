import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);

  const login = (username, password) => {
    if (username === 'Dinuka' && password === '1111') {
      setUser({ name: 'Dinuka', username });
      return true;
    }
    return false;
  };

  const register = (userData) => {
    console.log('Registering user:', userData);
  };

  return (
    <UserContext.Provider value={{ user, notes, setNotes, login, register }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
