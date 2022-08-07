import styled, { css } from 'styled-components';
import { QUERIES } from 'theme/mediaQueries';

export const CollectorContainer = styled.section`
  max-width: var(--max-container);
  margin: var(--center-container);
  min-height: 400px;
  padding: 40px 20px;
`;

export const Collector = styled.div`
  min-height: 500px;
`;

export const CollectorCards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  margin-top: 20px;

  @media screen and (min-width: 456px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 790px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
