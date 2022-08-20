import React from 'react';
import { DetailOption } from 'components/pages/NFTDetail/NFTDetailStyles';

type Props = {
  mobile?: boolean;
};

const NavShare = ({ mobile }: Props) => {
  return (
    <DetailOption mobile={mobile}>
      <div>
        <button>
          <i className="fa-regular fa-arrow-left-long"></i>
        </button>
      </div>
      <div>
        <button>
          <i className="fa-regular fa-share-nodes"></i>
        </button>
      </div>
    </DetailOption>
  );
};

export default NavShare;
