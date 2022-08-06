import React from 'react';
import styled, { css } from 'styled-components';

type styleProps = {
  large?: boolean;
  secondaryStyle?: boolean;
};

const Button = styled.button<styleProps>`
  border: none;
  background-color: var(--color-accent-100);
  color: var(--color-accent-200);
  height: ${(props) => (props.large ? '54px' : '30px')};
  min-width: ${(props) => (props.large ? '150px' : '')};
  padding: 0px 20px;
  border-radius: 5px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0px;
  cursor: pointer;
  transition: var(--transition);
  font-size: ${(props) => (props.large ? '16px' : '')};

  ${(props) =>
    props.secondaryStyle &&
    css`
      background-color: var(--color-font-100);
      color: var(--color-font-500);
    `}

  span {
    margin-left: '10px';
  }

  i {
    margin-left: 10px;
    transition: var(--transition);
    transform: translateX(0px);
  }

  &:hover {
    transition: var(--transition);
    background-color: var(--color-accent-400);

    i {
      transition: var(--transition);
      transform: translateX(20px);
    }
  }
`;

type Props = {
  children: string;
  handleClick: () => void;
  large?: boolean;
  secondaryStyle?: boolean;
};

const LinkButton = ({
  children,
  handleClick,
  large,
  secondaryStyle,
}: Props) => {
  return (
    <Button onClick={handleClick} large={large} secondaryStyle={secondaryStyle}>
      {children}
      <div className="icon-container">
        <i className="fa-solid fa-arrow-right-long"></i>
      </div>
    </Button>
  );
};

export default LinkButton;
