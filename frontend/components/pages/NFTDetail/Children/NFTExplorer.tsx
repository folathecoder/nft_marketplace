import React from 'react';
import Link from 'next/link';
import {
  DetailExplorer,
  ExplorerButton,
} from 'components/pages/NFTDetail/NFTDetailStyles';

type Props = {
  mobile?: boolean;
};

const NFTExplorer = ({ mobile }: Props) => {
  return (
    <DetailExplorer mobile={mobile}>
      <Link href="http://" target="_blank" rel="noreferrer">
        <ExplorerButton>
          <div>Scan on Polygon Explorer</div>
          <div>
            <i className="fa-regular fa-arrow-up-right-from-square"></i>
          </div>
        </ExplorerButton>
      </Link>
      <Link href="http://" target="_blank" rel="noreferrer">
        <ExplorerButton>
          <div>Scan on Polygon Explorer</div>
          <div>
            <i className="fa-regular fa-arrow-up-right-from-square"></i>
          </div>
        </ExplorerButton>
      </Link>
    </DetailExplorer>
  );
};

export default NFTExplorer;
