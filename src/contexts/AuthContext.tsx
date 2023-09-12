// Dependencies
import {useState, createContext, useContext, FC, Dispatch, SetStateAction} from 'react';




// Types


type User = {
  firstName: string
  lastName: string
  jobTitle: string
  email: string
  varification: boolean
  registeredTime: string
  lastVisitTime: string
  blocked: boolean
}

interface AuthContextProps {
}

const initialValues = {

}

const AuthContext = createContext<AuthContextProps>(initialValues);

export const AuthProvider: FC<any> = ({ children }) => {



  const value = {

  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
}
