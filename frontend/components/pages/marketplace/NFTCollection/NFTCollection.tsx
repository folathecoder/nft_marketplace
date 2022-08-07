import React from 'react';
import {
  CollectorContainer,
  Collector,
  CollectorCards,
} from 'components/pages/marketplace/NFTCollection/NFTCollectionStyles';
import NFTCard from 'components/pages/marketplace/NFTCard/NFTCard';
import { NFTData } from 'cms/marketplace/collectors';

const NFTCollection = () => {
  return (
    <CollectorContainer>
      <div>
        <h2>Explore</h2>
      </div>
      <Collector>
        <CollectorCards>
          {NFTData.map((item, index) => (
            <NFTCard key={index} data={item} />
          ))}
        </CollectorCards>
      </Collector>
    </CollectorContainer>
  );
};

export default NFTCollection;
