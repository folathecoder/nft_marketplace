import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  HeaderContainer,
  HeaderInner,
  Logo,
  HeaderLeft,
  HeaderRight,
  DesktopMenu,
  UserProfile,
} from './HeaderStyles';
import images from 'public/images/assets';
import { appMenu } from 'cms/global/appMenu';
import { ActionButton, CustomToggle, SettingsMenu } from 'components/global';

type Props = {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ theme, setTheme }: Props) => {
  const [settingsToggle, setSettingsToggle] = useState(false);
  const [connect, setConnect] = useState(false);

  return (
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
        <HeaderRight>
          {/* <div className="theme_toggle">
            <CustomToggle state={theme} setState={setTheme} />
          </div> */}
          <div>
            {connect ? (
              <UserProfile onClick={() => setConnect(false)}>
                <div className="wallet_address">
                  <div></div>
                  <div>
                    12,003&nbsp;<span>BNB</span>
                  </div>
                  <div>
                    <p>0xf39F...2266</p>&nbsp;
                    <span>
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
            ) : (
              <ActionButton handleClick={() => setConnect(true)}>
                Connect
              </ActionButton>
            )}
          </div>
        </HeaderRight>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
