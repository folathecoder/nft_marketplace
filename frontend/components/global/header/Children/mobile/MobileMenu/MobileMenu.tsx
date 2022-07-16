import React from 'react';
import { MenuContainer, MenuNavigation } from './MobileMenuStyles';
import Image from 'next/image';
import Link from 'next/link';
import {
  HeaderContainer,
  HeaderInner,
  Logo,
  HeaderLeft,
  HeaderRight,
} from 'components/global/header/HeaderStyles';
import images from 'public/images/assets';
import { appMenu } from 'cms/global/appMenu';

type Props = {
  setOpenMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenu = ({ setOpenMobileMenu }: Props) => {
  return (
    <MenuContainer>
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
          </HeaderLeft>
          <HeaderRight connect={true}>
            <div className="mobile-menu_container">
              <button onClick={() => setOpenMobileMenu(false)}>
                <i className="fa-regular fa-xmark"></i>
              </button>
            </div>
          </HeaderRight>
        </HeaderInner>
      </HeaderContainer>
      <MenuNavigation>
        <div>
          <div>
            {appMenu.map((item) => (
              <Link href={item.menuRoute} key={item.id}>
                {item.menuTitle}
              </Link>
            ))}
          </div>
        </div>
      </MenuNavigation>
    </MenuContainer>
  );
};

export default MobileMenu;
