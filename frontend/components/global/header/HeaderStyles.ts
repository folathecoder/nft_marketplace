import styled, { css } from 'styled-components';
import { QUERIES } from 'theme/mediaQueries';

type Props = {
  connect?: boolean;
};

export const HeaderContainer = styled.header`
  width: 100%;
  padding: var(--container-padding);
  border-bottom: 1px solid var(--color-dec-100);
  z-index: 1000;
  background-color: var(--color-bg-100);
`;

export const HeaderInner = styled.div`
  max-width: var(--max-container);
  min-height: 40px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-bg-100);

  & > * {
    display: flex;
    align-items: center;
    flex: 1;
  }
`;

export const HeaderLeft = styled.div``;

export const HeaderRight = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .theme_toggle {
    margin-right: 20px;

    div {
      transform: translateY(2px);
    }
  }

  .wallet_image {
    width: 20px;
  }

  .mobile-menu_container {
    margin-left: 20px;

    button {
      color: var(--color-font-100);
      font-size: 25px;
    }

    @media ${QUERIES.tabletMini} {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  height: 100%;

  div {
    transform: translateX(-15px) translateY(2px);
  }
`;

export const DesktopMenu = styled.nav`
  height: 40px;
  display: flex;
  align-items: center;
  display: none;
  background-color: var(--color-bg-100);

  a {
    margin-right: 20px;
  }

  @media ${QUERIES.tabletMini} {
    display: flex;
  }
`;

export const UserProfile = styled.div`
  height: 30px;
  display: none;
  align-items: center;
  font-size: 14px;

  p {
    font-size: 14px;
  }

  .wallet_options {
    display: flex;
    background-color: var(--color-bg-200);
    height: 30px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    border: 1px solid var(--color-dec-100);
    cursor: pointer;
    position: relative;

    div:first-child {
      height: 100%;
      width: 100%;
      padding: 0px 8px;
      display: flex;
      align-items: center;
    }

    &:hover {
      transition: var(--transition);
    }
  }

  .wallet_address {
    display: flex;
    margin-right: 20px;
    background-color: var(--color-bg-200);
    height: 30px;
    display: flex;
    align-items: center;
    padding-left: 8px;
    border-radius: 10px;

    span {
      opacity: 0.5;
      margin-left: 2px;
      padding-top: 2px;
    }

    img {
      border-radius: 100%;
    }

    div:first-child {
      margin-right: 12px;
      position: relative;
      background-color: red;

      &::before {
        content: '';
        width: 6px;
        height: 6px;
        background-color: var(--color-accent-100);
        position: absolute;
        border-radius: 100%;
        transform: translateY(-2.5px);
      }
    }

    div:nth-child(2) {
      margin-right: 8px;
    }

    div:last-child {
      border: 1px solid var(--color-dec-100);
      height: 30px;
      display: flex;
      align-items: center;
      padding: 0px 8px;
      border-radius: 10px;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.4);
      background-color: opacity(var(--color-bg-200), 0.1);
    }
  }

  @media screen and (min-width: 456px) {
    display: flex;
  }
`;

export const UserProfileMini = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  font-size: 14px;

  @media screen and (min-width: 456px) {
    display: none;
  }

  p {
    font-size: 14px;
  }

  .wallet_options {
    display: flex;
    background-color: var(--color-bg-200);
    height: 30px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    border: 1px solid var(--color-dec-100);
    cursor: pointer;
    position: relative;

    div:first-child {
      height: 100%;
      width: 100%;
      padding: 0px 8px;
      display: flex;
      align-items: center;
    }

    &:hover {
      transition: var(--transition);
    }
  }

  .wallet_address {
    display: flex;
    margin-right: 5px;
    background-color: var(--color-bg-200);
    height: 30px;
    display: flex;
    align-items: center;
    border-radius: 10px;

    span {
      opacity: 0.5;
      margin-left: 2px;
      padding-top: 2px;
    }

    div:last-child {
      border: 1px solid var(--color-dec-100);
      height: 30px;
      display: flex;
      align-items: center;
      padding: 0px 8px;
      border-radius: 10px;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.4);
      background-color: opacity(var(--color-bg-200), 0.1);
    }
  }
`;
