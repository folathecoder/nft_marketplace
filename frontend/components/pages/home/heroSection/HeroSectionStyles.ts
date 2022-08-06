import styled, { css } from 'styled-components';
import { QUERIES } from 'theme/mediaQueries';

type Props = {
  connect?: boolean;
};

export const HeroContainer = styled.section`
  max-width: var(--max-container);
  padding: 50px 20px 200px 20px;
  margin: var(--center-container);
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;

  h1 {
    span {
      text-align: center;
      background-color: var(--gradient-bg-200);
      background-image: var(--gradient-200);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }
  }

  p {
    font-size: 24px;
    line-height: 36px;
    margin-top: 25px;
    opacity: 0.6;
  }
`;

export const HeroBtnContainer = styled.div`
  margin-top: 40px;

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
