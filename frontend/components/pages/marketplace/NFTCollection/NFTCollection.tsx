import React from 'react';
import {
  CollectorContainer,
  Collector,
  CollectorCards,
} from 'components/pages/marketplace/NFTCollection/NFTCollectionStyles';
import NFTCard from 'components/pages/marketplace/NFTCard/NFTCard';
import { NFTData } from 'cms/marketplace/collectors';
import NFTFilter from 'components/pages/marketplace/NFTFilter/NFTFilter';

type propTypes = {};

const NFTCollection = () => {
  return (
    <CollectorContainer>
      <div>
        <h2>Explore</h2>
      </div>
      <NFTFilter />
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
