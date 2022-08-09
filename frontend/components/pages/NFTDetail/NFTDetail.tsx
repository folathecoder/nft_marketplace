import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  DetailContainer,
  DetailLeft,
  DetailRight,
  DetailImage,
  DetailExplorer,
  ExplorerButton,
  DetailOption,
  DetailContent,
  CreatorImage,
  Creator,
  DetailInfo,
  DetailOwner,
  OwnerImage,
  Owner,
  DetailPrice,
} from 'components/pages/NFTDetail/NFTDetailStyles';
import image from 'public/images/assets';
import { ActionButton } from 'components/global';

const NFTDetail = () => {
  return (
    <DetailContainer>
      <div>
        <DetailLeft>
          <div>
            <DetailImage>
              <Image
                src={image.nft2}
                alt={''}
                layout="fill"
                objectFit="cover"
              />
            </DetailImage>
            <DetailExplorer>
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
          </div>
          <div></div>
        </DetailLeft>
        <DetailRight>
          <DetailOption>
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
          <DetailContent>
            <h1>NFT Name #389</h1>
            <DetailPrice>
              <div>
                <div>
                  <h2>$2,343.54</h2>
                </div>
                <div>
                  <button>BUY</button>
                </div>
              </div>
            </DetailPrice>
            <Creator>
              <div>
                <CreatorImage>
                  <Image src={image.creator4} alt={''} layout="responsive" />
                </CreatorImage>
                <div>
                  <h4>Creator</h4>
                  <p>Ghost Rider</p>
                </div>
              </div>
            </Creator>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              delectus laborum, similique perferendis debitis blanditiis
              doloribus, minima quia molestias voluptatem repudiandae eaque,
              illo libero labore enim porro dolorem nam aperiam. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Nemo delectus
              laborum, similique perferendis debitis blanditiis doloribus,
              minima quia molestias voluptatem repudiandae eaque, illo libero
              labore enim porro dolorem nam aperiam.
            </p>
          </DetailContent>
          <DetailInfo>
            <div>
              <h3>Ownership</h3>
            </div>
            <div>
              <Link href={'/'} target="_blank" rel="noreferrer">
                <DetailOwner>
                  <div>
                    <div>
                      <Owner>
                        <div>
                          <OwnerImage>
                            <Image
                              src={image.creator4}
                              alt={''}
                              layout="responsive"
                            />
                          </OwnerImage>
                          <div>
                            <h4>Owner</h4>
                            <p>Apollo Jordan</p>
                          </div>
                        </div>
                      </Owner>
                    </div>
                    <div>
                      <i className="fa-regular fa-arrow-up-right-from-square"></i>
                    </div>
                  </div>
                </DetailOwner>
              </Link>
            </div>
          </DetailInfo>
          <DetailInfo>
            <div>
              <h3>Transactions</h3>
            </div>
            <div>
              <Link href={'/'} target="_blank" rel="noreferrer">
                <DetailOwner>
                  <div>
                    <div>
                      <Owner>
                        <div>
                          <div>
                            <h4>12 days ago</h4>
                            <p>Bought by Apollo Jordan for $23.89</p>
                          </div>
                        </div>
                      </Owner>
                    </div>
                    <div>
                      <h5>View Details</h5>
                    </div>
                  </div>
                </DetailOwner>
              </Link>
              <Link href={'/'} target="_blank" rel="noreferrer">
                <DetailOwner>
                  <div>
                    <div>
                      <Owner>
                        <div>
                          <div>
                            <h4>42 days ago</h4>
                            <p>Minted by Ghost Rider</p>
                          </div>
                        </div>
                      </Owner>
                    </div>
                    <div>
                      <h5>View Details</h5>
                    </div>
                  </div>
                </DetailOwner>
              </Link>
            </div>
          </DetailInfo>
        </DetailRight>
      </div>
    </DetailContainer>
  );
};

export default NFTDetail;
