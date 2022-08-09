import styled, { css } from 'styled-components';
import { QUERIES } from 'theme/mediaQueries';

export const FilterContainer = styled.section`
  margin: 20px 0px;

  & > * {
    display: flex;
    justify-content: space-between;
  }
`;

export const FilterSearch = styled.div`
  flex: 1;

  & > * {
    display: flex;
    align-items: center;
    border: 1px solid var(--color-bg-200);
    border-radius: 8px;

    div:first-child {
      padding: 0px 15px;

      i {
        opacity: 0.5;
      }
    }

    div:last-child {
      width: 100%;
    }
  }

  input {
    margin: 0;
    height: 40px;
    border-radius: 0px 8px 8px 0px;
    border: none;
    background-color: var(--color-bg-100);
    width: 100%;
  }
`;

export const FilterSort = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
