import React from 'react';
import { FooterInner, FooterContainer } from './FooterStyles';
import { appName } from 'cms/global/appInformation';
import { socialsMenu } from 'cms/global/appMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterInner>
        <div>
          <p>
            ©&nbsp;{date}&nbsp;{appName}&nbsp;|&nbsp;All rights reserved.
          </p>
        </div>
        <div>
          {socialsMenu.map((item) => (
            <a
              href={item.socialLink}
              target="_blank"
              rel="noreferrer"
              key={item.id}
            >
              <i className={item.socialIconClass}></i>
            </a>
          ))}
        </div>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;
