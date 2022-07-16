import styled, { css } from 'styled-components';
import { QUERIES } from 'theme/mediaQueries';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 10px 20px;
  border-top: 1px solid var(--color-dec-100);
`;

export const FooterInner = styled.div`
  max-width: var(--max-container);
  min-height: 40px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  & > * {
    display: flex;
    align-items: center;
    flex: 1;
  }

  p {
    font-size: 14px;
    opacity: 0.4;
  }

  i {
    font-size: 20px;
    transition: var(--transition);

    &:hover {
      color: var(--color-accent-100);
      transition: var(--transition);
    }
  }

  @media ${QUERIES.mobile} {
    flex-direction: row;
  }

  div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0px 8px 0px;

    a:nth-child(2) {
      margin: 0px 20px;
    }

    @media ${QUERIES.mobile} {
      padding: 0px;
      justify-content: flex-end;

      a:nth-child(2) {
        margin: 0px;
        margin-left: 20px;
      }

      a {
        margin-left: 20px;
      }
    }
  }
`;
