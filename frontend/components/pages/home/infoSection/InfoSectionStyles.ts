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
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  margin-top: 20px;
  transform: translateY(-150px);
  padding: 0px 20px;
  height: 400px;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 790px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 418px) {
    height: 450px;
  }

  @media screen and (min-width: 460px) {
    height: 500px;
  }

  @media screen and (min-width: 508px) {
    height: 600px;
  }

  @media screen and (min-width: 555px) {
    height: auto;
  }
`;
