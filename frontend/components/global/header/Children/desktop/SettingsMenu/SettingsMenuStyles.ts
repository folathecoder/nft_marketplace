import styled, { css } from 'styled-components';

type Props = {
  lastItem: boolean;
};

export const MenuContainer = styled.ul`
  background-color: var(--color-bg-200);
  width: 200px;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 40px;
  border-radius: 10px;
`;

export const MenuItem = styled.li<Props>`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  white-space: nowrap;
  position: relative;
  border-bottom: ${(props) =>
    props.lastItem ? '' : '1px solid rgb(242, 242, 242, 0.05)'};
  cursor: pointer;

  &:hover {
    background-color: var(--color-bg-600);
  }

  & > * {
    display: flex;
    width: 100%;
  }

  span:last-child {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;
