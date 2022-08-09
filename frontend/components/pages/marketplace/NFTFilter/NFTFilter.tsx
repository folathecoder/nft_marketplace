import React from 'react';
import {
  FilterContainer,
  FilterSearch,
  FilterSort,
} from 'components/pages/marketplace/NFTFilter/NFTFilterStyles';

const NFTFilter = () => {
  return (
    <FilterContainer>
      <div>
        <FilterSearch>
          <div>
            <div>
              <i className="fa-regular fa-magnifying-glass"></i>
            </div>
            <div>
              <input type="search" name="" id="" placeholder='Search NFTs' />
            </div>
          </div>
        </FilterSearch>
        <FilterSort></FilterSort>
      </div>
    </FilterContainer>
  );
};

export default NFTFilter;
