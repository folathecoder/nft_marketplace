import React from 'react';
import Image from 'next/image';
import {
  NFTCardContainer,
  NFTCards,
  NoNFTContainer,
} from 'components/pages/profile/ProfileStyles';
import { NFTData } from 'cms/marketplace/collectors';
import { NFTCard } from 'components/pages/marketplace';
import NotFoundImage from 'public/images/assets/profile/scared.png';
import { LinkButton } from 'components/global';

const ProfileNFTs = () => {
  return (
    <NFTCardContainer>
      <div>
        <h2>Collection</h2>
      </div>
      {true ? (
        <NFTCards>
          {NFTData.slice(0, 6).map((item, index) => (
            <NFTCard key={index} data={item} />
          ))}
        </NFTCards>
      ) : (
        <NoNFTContainer>
          <div>
            <Image
              src={NotFoundImage}
              layout="intrinsic"
              alt="no nft collection"
            />
            <p>Collection is empty!</p>
            <LinkButton handleClick={() => {}} large secondaryStyle>
              Explore Marketplace
            </LinkButton>
          </div>
        </NoNFTContainer>
      )}
    </NFTCardContainer>
  );
};

export default ProfileNFTs;
