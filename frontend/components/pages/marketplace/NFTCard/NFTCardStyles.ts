import styled, { css } from 'styled-components';
import { QUERIES } from 'theme/mediaQueries';

type prop = {
  secondaryVariant?: boolean;
};

export const Card = styled.div<prop>`
  background-color: ${(props) =>
    props.secondaryVariant ? 'hsla(218, 80%, 2%, 1)' : 'hsl(215, 21%, 11%)'};
  border-radius: 8px;
`;

export const CardImage = styled.div`
  background-color: var(--color-bg-500);
  height: 350px;
  width: 100%;
  border-radius: 8px 8px 0px 0px;
  position: relative;

  img {
    border-radius: 8px 8px 0px 0px;
  }
`;

export const CardContent = styled.div`
  padding: 20px;
`;

export const CardName = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;

  p {
    font-family: var(--font-pry-200);
    font-weight: 300;
  }
`;

export const CardIcon = styled.div`
  & > * {
    height: 22px;
    width: 22px;
    border-radius: 100%;
  }
`;

export const CardCreator = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;

  & > * {
    display: flex;

    p {
      margin-left: 10px;
      font-size: 15px;
      opacity: 0.5;
    }
  }
`;

export const CreatorImage = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-image: var(--gradient-200);
  padding: 1px;

  img {
    border-radius: 100%;
  }
`;
