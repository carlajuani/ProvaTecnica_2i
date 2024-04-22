// src/context/UserContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { ReactNode } from 'react';
import { IUserData } from '../interfaces/IUserData'; 
import { IUserContextType } from '../interfaces/IUserContextType';

const UserContext = createContext<IUserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<IUserData>({ nickname: '', nombre: '', apellidos: '', dirección: '', email: '' });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
