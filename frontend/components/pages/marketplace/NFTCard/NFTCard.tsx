import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardImage,
  CardContent,
  CardName,
  CardIcon,
  CardPrice,
  CardCreator,
  CreatorImage,
} from 'components/pages/marketplace/NFTCard/NFTCardStyles';
import MaticIcon from 'public/images/assets/marketplace/matic-token-icon.webp';

type prop = {
  secondaryVariant?: boolean;
  data: {
    id: number;
    NFTName: string;
    NFTImage: string;
    NFTCreatorName: string;
    NFTCreatorImage: string;
  };
};

const NFTCard = ({ data, secondaryVariant }: prop) => {
  const { NFTName, NFTImage, NFTCreatorImage, NFTCreatorName } = data;

  return (
    <Card secondaryVariant={secondaryVariant}>
      <CardImage>
        <Image src={NFTImage} alt={NFTName} layout="fill" objectFit="cover" />
      </CardImage>
      <CardContent>
        <CardName>
          <div>
            <h3>{NFTName} </h3>
          </div>
          <CardIcon>
            <div>
              <Image src={MaticIcon} alt={'matic token'} layout="responsive" />
            </div>
          </CardIcon>
        </CardName>
        <CardPrice>
          <div>
            <p>$1,000</p>
          </div>
          <div>
            <p>0xf3...2266</p>
          </div>
        </CardPrice>
        <CardCreator>
          <div>
            <CreatorImage>
              <Image
                src={NFTCreatorImage}
                alt={NFTCreatorName}
                layout="responsive"
              />
            </CreatorImage>
            <div>
              <p>{NFTCreatorName}</p>
            </div>
          </div>
        </CardCreator>
      </CardContent>
    </Card>
  );
};

export default NFTCard;
