import styled, { css } from 'styled-components';
import { QUERIES } from 'theme/mediaQueries';

type Props = {
  connect?: boolean;
};

export const InfoContainer = styled.section`
  background-color: var(--color-bg-200);

  & > * {
    max-width: var(--max-container);
    margin: var(--center-container);
  }
`;

export const InfoImageContainer = styled.section`
  transform: translateY(-150px);
  padding: 0px 20px;
  height: 250px;

  @media screen and (min-width: 418px) {
    height: 300px;
  }

  @media screen and (min-width: 460px) {
    height: 350px;
  }

  @media screen and (min-width: 508px) {
    height: 400px;
  }

  @media screen and (min-width: 555px) {
    height: auto;
  }
`;
