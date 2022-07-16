import styled, { css } from 'styled-components';
import { QUERIES } from 'theme/mediaQueries';

type Props = {};

export const MenuContainer = styled.nav`
  width: 100%;
  background-color: black;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  @media ${QUERIES.tabletMini} {
    display: none;
  }
`;

export const MenuNavigation = styled.div`
  height: calc(100vh - 61px);
  display: flex;
  align-items: center;

  a {
    font-size: 45px;
    line-height: 80px;
    text-align: right;
    width: 100%;
    padding-right: 40px;
  }

  & > * {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    & > * {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }
`;
