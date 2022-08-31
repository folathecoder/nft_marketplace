import React, { useContext } from 'react';
import { AppContext } from 'context/AppContext';
import Image from 'next/image';
import {
  ModalContainer,
  ModalBackdrop,
  ModalButton,
  ModalList,
  ModalHeader,
} from 'components/plugins/walletConnectModal/WalletConnectModalStyles';
import image from 'public/images/assets/wallet';
import { ClickAwayListener } from '@mui/material';

const WalletConnectModal = () => {
  const { openWalletModal, setOpenWalletModal } = useContext(AppContext);

  const wallets = [
    {
      walletName: 'Metamask',
      walletImage: image.Metamask,
      walletEvent: () => {},
    },
    {
      walletName: 'Coinbase Wallet',
      walletImage: image.CoinbaseLogo,
      walletEvent: () => {},
    },
    {
      walletName: 'WalletConnect',
      walletImage: image.WalletConnect,
      walletEvent: () => {},
    },
  ];

  return (
    <ModalBackdrop>
      <ClickAwayListener onClickAway={() => setOpenWalletModal(false)}>
        <ModalContainer>
          <ModalHeader>
            <div>
              <h4>Connect a wallet</h4>
            </div>
            <div>
              <button
                className="close_btn"
                onClick={() => setOpenWalletModal(false)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </ModalHeader>
          <ModalList>
            {wallets.map((item, index) => {
              return (
                <ModalButton key={index}>
                  <div className="wallet_content">
                    <div>
                      <div className="connect_indicator" />
                    </div>
                    <div>
                      <p>{item.walletName}</p>
                    </div>
                  </div>
                  <div className="wallet_image">
                    <div>
                      <Image
                        src={item.walletImage}
                        alt={item.walletName}
                        layout="intrinsic"
                      ></Image>
                    </div>
                  </div>
                </ModalButton>
              );
            })}
          </ModalList>
        </ModalContainer>
      </ClickAwayListener>
    </ModalBackdrop>
  );
};

export default WalletConnectModal;
