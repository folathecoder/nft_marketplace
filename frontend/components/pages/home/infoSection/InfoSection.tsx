import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  InfoContainer,
  InfoImageContainer,
} from 'components/pages/home/infoSection/InfoSectionStyles';
import heroImageMobile from 'public/images/assets/home/hero-image-mobile.png';
import heroImageTablet from 'public/images/assets/home/hero-image-tablet.png';
import heroImageDesktop from 'public/images/assets/home/hero-image-desktop.png';
import useScreenResize from 'hooks/useScreenResize';
import { NFTCard } from 'components/pages/marketplace';
import { NFTData } from 'cms/marketplace/collectors';

const InfoSection = () => {
  const [dataLength, setDataLength] = useState(1);
  const { screenSize } = useScreenResize();

  useEffect(() => {
    if (screenSize.width < 600) {
      setDataLength(1);
    } else if (screenSize.width >= 600 && screenSize.width < 800) {
      setDataLength(2);
    } else if (screenSize.width > 800) {
      setDataLength(3);
    }
  }, [screenSize]);

  return (
    <InfoContainer>
      <div>
        <InfoImageContainer>
          {NFTData.slice(0, dataLength).map((item, index) => (
            <NFTCard key={index} data={item} secondaryVariant />
          ))}
        </InfoImageContainer>
      </div>
    </InfoContainer>
  );
};

export default InfoSection;
