import styled, { css } from 'styled-components';
import { QUERIES } from 'theme/mediaQueries';

type Props = {
  connect?: boolean;
};

export const ModalBackdrop = styled.section`
  position: fixed;
  background-color: rgb(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
`;

export const ModalContainer = styled.section`
  width: 400px;
  background-color: var(--color-bg-200);
  border-radius: 8px;
  padding: 12px;

  button {
    cursor: pointer;
  }

  @media screen and (max-width: 450px) {
    width: calc(100vw - 40px);
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  .close_btn {
    font-size: 20px;
    color: var(--color-font-100);
  }
`;

export const ModalList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ModalButton = styled.button`
  height: 50px;
  width: 100%;
  background-color: var(--color-bg-100);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px;
  transition: all 0.1s linear;

  .connect_indicator {
    height: 10px;
    width: 10px;
    background-color: rgb(255, 255, 255, 0.2);
    border-radius: 100%;
    margin-right: 10px;
  }

  .wallet_content {
    display: flex;
    align-items: center;
  }

  .wallet_image {
    & > * {
      height: 25px;
      width: 25px;
      border-radius: 100%;
    }
  }

  &:hover {
    border: 1px solid var(--color-accent-100);
    transition: all 0.1s linear;
  }
`;
