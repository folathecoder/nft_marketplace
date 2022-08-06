import React from 'react';
import {
  HeroContainer,
  HeroBtnContainer,
} from 'components/pages/home/heroSection/HeroSectionStyles';
import { LinkButton } from 'components/global';

const HeroSection = () => {
  return (
    <HeroContainer>
      <div>
        <h1>
          <span>Exponential rewards.</span>
          <br />
          Discover, collect, and sell NFTs.
        </h1>
        <p>Unleash your artisitic creativity and sell your magic to collectors.</p>
      </div>
      <HeroBtnContainer>
        <div>
          <LinkButton handleClick={() => {}} large secondaryStyle>
            Explore Marketplace
          </LinkButton>
        </div>
      </HeroBtnContainer>
    </HeroContainer>
  );
};

export default HeroSection;
