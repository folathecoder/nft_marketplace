import React from 'react';
import {
  NFTCardContainer,
  NFTCards,
} from 'components/pages/profile/ProfileStyles';
import { NFTData } from 'cms/marketplace/collectors';
import { NFTCard } from 'components/pages/marketplace';

const ProfileNFTs = () => {
  return (
    <NFTCardContainer>
      <div>
        <h2>Collection</h2>
      </div>
      <NFTCards>
        {NFTData.slice(0, 6).map((item, index) => (
          <NFTCard key={index} data={item} />
        ))}
      </NFTCards>
    </NFTCardContainer>
  );
};

export default ProfileNFTs;
