import React from 'react';
import Image from 'next/image';
import {
  InfoContainer,
  InfoImageContainer,
} from 'components/pages/home/infoSection/InfoSectionStyles';
import heroImageMobile from 'public/images/assets/home/hero-image-mobile.png';
import heroImageTablet from 'public/images/assets/home/hero-image-tablet.png';
import heroImageDesktop from 'public/images/assets/home/hero-image-desktop.png';
import useScreenResize from 'hooks/useScreenResize';

const InfoSection = () => {
  const { screenSize } = useScreenResize();

  return (
    <InfoContainer>
      <div>
        <InfoImageContainer>
          <div>
            {screenSize.width < 600 && (
              <Image
                src={heroImageMobile}
                alt="nft collection"
                layout="responsive"
              />
            )}
            {screenSize.width >= 600 && screenSize.width < 800 && (
              <Image
                src={heroImageTablet}
                alt="nft collection"
                layout="responsive"
              />
            )}

            {screenSize.width > 800 && (
              <Image
                src={heroImageDesktop}
                alt="nft collection"
                layout="responsive"
              />
            )}
          </div>
        </InfoImageContainer>
      </div>
    </InfoContainer>
  );
};

export default InfoSection;
