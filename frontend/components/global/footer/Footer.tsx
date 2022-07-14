import React from 'react';
import { FooterInner, FooterContainer } from './FooterStyles';
import { appName } from 'cms/global/appInformation';

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
          <a href="http://" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="http://" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="http://" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;
