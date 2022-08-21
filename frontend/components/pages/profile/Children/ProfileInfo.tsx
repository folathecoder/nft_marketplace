import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProfileInfoContainer } from 'components/pages/profile/ProfileStyles';
import MaticIcon from 'public/images/assets/marketplace/matic-token-icon.webp';

const ProfileInfo = () => {
  return (
    <ProfileInfoContainer>
      <div>
        <div>
          <h1>
            Ghost Rider
            <span>
              <i className="fa-solid fa-badge-check"></i>
            </span>
          </h1>
        </div>
        <div className="info_address">
          <p>
            <span className="info_address-image">
              <Image
                src={MaticIcon}
                alt={'matic token'}
                layout="intrinsic"
                height={14}
                width={14}
              />
            </span>
            0xFC92a..d8
          </p>
          <p>Joined March 2021</p>
        </div>
        <div>
          <p className="info_description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            eveniet fuga culpa tenetur soluta aperiam architecto sit assumenda
            dolores quos, illo id tempora sint veritatis praesentium obcaecati
            sed eligend.
          </p>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <Link href={'/'} target="_blank">
              <i className="fa-light fa-globe"></i>
            </Link>
          </li>
          <li>
            <Link href={'/'} target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link href={'/'} target="_blank">
              <i className="fa-brands fa-discord"></i>
            </Link>
          </li>
          <li>
            <Link href={'/'} target="_blank">
              <i className="fa-brands fa-telegram"></i>
            </Link>
          </li>
          <li>
            <i className="fa-light fa-pen"></i>
          </li>
        </ul>
      </div>
    </ProfileInfoContainer>
  );
};

export default ProfileInfo;
