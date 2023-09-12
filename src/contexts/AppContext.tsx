// Dependencies
import React, {useState, createContext, useContext, FC, Dispatch, SetStateAction} from 'react';

interface AppContextProps {
  showMessageBox: boolean;
  setShowMessageBox: Dispatch<SetStateAction<boolean>>;
  headerHeight: number;
  setHeaderHeight: Dispatch<SetStateAction<number>>;
}

const initialValues = {
  showMessageBox: false,
  setShowMessageBox: () => {},
  headerHeight: 0,
  setHeaderHeight: () => {}
}

const AppContext = createContext<AppContextProps>(initialValues);

export const AppProvider: FC<any> = ({ children }) => {
  const [showMessageBox, setShowMessageBox] = useState(initialValues.showMessageBox);
  const [headerHeight, setHeaderHeight] = useState(initialValues.headerHeight);

  const value = {
    showMessageBox,
    setShowMessageBox,
    headerHeight,
    setHeaderHeight
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
}
