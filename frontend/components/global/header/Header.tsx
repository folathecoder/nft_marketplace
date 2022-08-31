import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AppContext } from 'context/AppContext';
import {
  HeaderContainer,
  HeaderInner,
  Logo,
  HeaderLeft,
  HeaderRight,
  DesktopMenu,
  UserProfile,
  UserProfileMini,
} from './HeaderStyles';
import images from 'public/images/assets';
import { appMenu } from 'cms/global/appMenu';
import { ActionButton, CustomToggle, SettingsMenu } from 'components/global';
import MobileMenu from 'components/global/header/Children/mobile/MobileMenu/MobileMenu';
import { WalletConnectModal } from 'components/plugins';

type Props = {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ theme, setTheme }: Props) => {
  const { openWalletModal, setOpenWalletModal } = useContext(AppContext);
  const [settingsToggle, setSettingsToggle] = useState(false);
  const [connect, setConnect] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    if (openMobileMenu) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [openMobileMenu]);

  useEffect(() => {
    const keyDownHandler = (event: {
      key: string;
      preventDefault: () => void;
    }) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpenMobileMenu(false);
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    <>
      <HeaderContainer>
        <HeaderInner>
          <HeaderLeft>
            <Logo>
              <div>
                <Image
                  src={images.logo02}
                  layout="intrinsic"
                  objectFit="contain"
                  height={35}
                />
              </div>
            </Logo>
            <DesktopMenu>
              <div>
                {appMenu.map((item) => (
                  <Link href={item.menuRoute} key={item.id}>
                    {item.menuTitle}
                  </Link>
                ))}
              </div>
            </DesktopMenu>
          </HeaderLeft>
          <HeaderRight connect={connect}>
            <div>
              {connect ? (
                <>
                  <UserProfile>
                    <div className="wallet_address">
                      <div></div>
                      <div>
                        103,000.00&nbsp;<span>BNB</span>
                      </div>
                      <div>
                        <p>0xf39F...2266</p>&nbsp;
                        <span className="wallet_image">
                          <Image
                            src={images.creator3}
                            layout="intrinsic"
                            objectFit="contain"
                            height={20}
                            width={20}
                          />
                        </span>
                      </div>
                    </div>
                    <div className="wallet_options">
                      <div onClick={() => setSettingsToggle(!settingsToggle)}>
                        <i className="fa-solid fa-ellipsis"></i>
                      </div>
                      {settingsToggle && (
                        <SettingsMenu setSettingsToggle={setSettingsToggle} />
                      )}
                    </div>
                  </UserProfile>
                  <UserProfileMini className="walletInfo_minified">
                    <div className="wallet_address">
                      <div>
                        <p>0xf39F...2266</p>&nbsp;
                      </div>
                    </div>
                    <div className="wallet_options">
                      <div onClick={() => setSettingsToggle(!settingsToggle)}>
                        <i className="fa-solid fa-ellipsis"></i>
                      </div>
                      {settingsToggle && (
                        <SettingsMenu setSettingsToggle={setSettingsToggle} />
                      )}
                    </div>
                  </UserProfileMini>
                </>
              ) : (
                <ActionButton
                  handleClick={() => setOpenWalletModal(!openWalletModal)}
                  iconClass={'fa-regular fa-wallet'}
                >
                  Connect
                </ActionButton>
              )}
            </div>
            <div className="mobile-menu_container">
              <button onClick={() => setOpenMobileMenu(true)}>
                <i className="fa-regular fa-bars"></i>
              </button>
            </div>
          </HeaderRight>
        </HeaderInner>
      </HeaderContainer>

      {openMobileMenu && <MobileMenu setOpenMobileMenu={setOpenMobileMenu} />}
      {openWalletModal && <WalletConnectModal />}
    </>
  );
};

export default Header;
