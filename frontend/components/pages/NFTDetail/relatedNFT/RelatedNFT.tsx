import React from 'react';
import {
  RelatedContainer,
  RelatedCards,
  RelatedButton,
} from 'components/pages/NFTDetail/relatedNFT/RelatedNFTStyles';
import { NFTData } from 'cms/marketplace/collectors';
import { NFTCard } from 'components/pages/marketplace';
import { LinkButton } from 'components/global';

const RelatedNFT = () => {
  return (
    <RelatedContainer>
      <div>
        <h2>More NFTs</h2>
      </div>
      <div>
        <RelatedCards>
          {NFTData.slice(0, 3).map((item, index) => (
            <NFTCard key={index} data={item} />
          ))}
        </RelatedCards>
        <RelatedButton>
          <LinkButton handleClick={() => {}} secondaryStyle>
            Explore marketplace
          </LinkButton>
        </RelatedButton>
      </div>
    </RelatedContainer>
  );
};

export default RelatedNFT;
