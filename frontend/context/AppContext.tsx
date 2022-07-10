import React, { createContext, useState, useEffect } from 'react';

type Props = {
  children: JSX.Element;
};

interface AppProviderTypes {
  // theme: boolean;
  // setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppProviderTypes | null>(null);

const AppProvider = ({ children }: Props) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppProvider;
