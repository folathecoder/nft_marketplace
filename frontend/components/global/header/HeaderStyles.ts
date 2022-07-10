import styled, { css } from 'styled-components';

type Props = {};

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid var(--color-dec-100);
`;

export const HeaderInner = styled.div`
  max-width: var(--max-container);
  min-height: 40px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * {
    display: flex;
    align-items: center;
    flex: 1;
  }
`;

export const HeaderLeft = styled.div``;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .theme_toggle {
    margin-right: 20px;

    div {
      transform: translateY(2px);
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

  a {
    margin-right: 20px;
  }
`;

export const UserProfile = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  font-size: 14px;

  p {
    font-size: 14px;
  }

  .wallet_options {
    display: flex;
    margin-right: 20px;
    background-color: var(--color-bg-200);
    height: 30px;
    display: flex;
    align-items: center;
    padding: 0px 8px;
    border-radius: 10px;
    border: 1px solid var(--color-dec-100);
    cursor: pointer;

    div:first-child {
      height: 15px;
      width: 15px;
      border-radius: 100%;
      background-color: green;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 8px;
    }

    &:hover {
      transition: var(--transition);
      color: var(--color-accent-100);
      opacity: 0.7;
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
`;
