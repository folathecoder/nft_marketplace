import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background-color: var(--color-font-100);
  color: var(--color-font-500);
  height: 30px;
  padding: 0px 20px;
  border-radius: 5px;
  font-weight: 500;
  display: flex;
  align-items: center;
  line-height: 0px;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    transition: var(--transition);
    background-color: var(--color-accent-100);
    color: var(--color-font-200);
  }

  span {
    margin-right: 5px;
  }
`;

type Props = {
  children: string;
  handleClick: () => void;
  iconClass?: string;
};

const ActionButton = ({ children, handleClick, iconClass }: Props) => {
  return (
    <Button onClick={handleClick}>
      {iconClass && (
        <span>
          <i className={iconClass}></i>
        </span>
      )}
      {children}
    </Button>
  );
};

export default ActionButton;
