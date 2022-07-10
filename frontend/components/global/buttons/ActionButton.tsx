import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background-color: var(--color-accent-100);
  color: var(--color-accent-200);
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
    background-color: var(--color-accent-400);
  }
`;

type Props = {
  children: string;
  handleClick: () => void;
};

const ActionButton = ({ children, handleClick }: Props) => {
  return <Button onClick={handleClick}>{children}</Button>;
};

export default ActionButton;
