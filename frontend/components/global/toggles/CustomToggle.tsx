import React from 'react';
import styled, { css } from 'styled-components';

const Toggle = styled.input`
  cursor: pointer;
  width: 44px;
  height: 22px;
  -webkit-appearance: none;
  background: var(--color-bg-200);
  outline: none;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  transition: var(--transition);
  position: relative;
  border: none;

  &:checked {
    background: var();
  }

  &::before {
    content: '';
    position: absolute;
    width: 22px;
    height: 22px;
    border: 50%;
    border-radius: 20px;
    top: 0;
    left: 0;
    background: hsl(0, 0%, 100%, 0.5);
    transition: var(--transition);
    transform: scale(1.1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transform: translateY(-0.3px);
  }

  &:checked::before {
    left: 22px;
  }
`;

type Props = {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};

const CustomToggle = ({ state, setState }: Props) => {
  return (
    <div>
      <Toggle
        type="checkbox"
        name="themeSwitch"
        id="themeSwitch"
        onChange={() => setState(!state)}
        checked={state}
      />
    </div>
  );
};

export default CustomToggle;
