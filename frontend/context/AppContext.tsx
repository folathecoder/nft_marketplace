import React, { createContext, useState } from 'react';
import useOverflow from 'hooks/useOverflow';

type Props = {
  children: JSX.Element;
};

interface AppProviderTypes {
  openWalletModal: boolean;
  setOpenWalletModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppProviderTypes | any>(null);

const AppProvider = ({ children }: Props) => {
  const [openWalletModal, setOpenWalletModal] = useState(false);

  useOverflow({
    state: openWalletModal,
  });

  return (
    <AppContext.Provider value={{ openWalletModal, setOpenWalletModal }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
