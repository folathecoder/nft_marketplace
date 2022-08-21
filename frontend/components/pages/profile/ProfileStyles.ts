import styled from 'styled-components';
import ProfileWallpaper from 'public/images/assets/profile/profile-head-bg.jpg';

type Props = {
  imgURL: any;
};

export const ProfileContainer = styled.section`
  width: 100%;
  margin: var(--center-container);
  position: relative;
`;

export const ProfileHeader = styled.section<Props>`
  width: 100%;
  height: 200px;
  background-color: var(--color-bg-200);
  position: relative;

  img {
    width: 500vw;
    object-fit: cover;
  }

  @media screen and (min-width: 1000px) {
    height: 300px;
  }

  .main_section {
    max-width: var(--max-container);
    margin: var(--center-container);
    height: 100%;
    position: relative;
    padding: 0px 20px;
  }
`;

export const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  background-color: var(--color-bg-200);
  position: absolute;
  max-width: var(--max-container);
  bottom: 0;
  transform: translateY(25px);
  border-radius: 8px;
  border: 5px solid var(--color-bg-100);

  img {
    border-radius: 8px;
  }
`;

export const NFTCardContainer = styled.section`
  max-width: var(--max-container);
  margin: 50px auto;
  min-height: 100px;
  padding: 0px 20px;
`;

export const NFTCards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  margin-top: 20px;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 790px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ProfileInfoContainer = styled.section`
  max-width: var(--max-container);
  margin: 50px auto;
  min-height: 100px;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  h1 {
    font-size: 25px;
    line-height: 25px;

    i {
      color: #3498db;
      font-size: 17px;
      margin-left: 8px;
      transform: translateY(-3px);
    }
  }

  .info_address {
    display: flex;
    margin-top: 10px;

    p:first-child {
      margin-right: 10px;
    }

    p:last-child {
      opacity: 0.7;
    }

    &-image {
      position: relative;
      transform: translateY(3px);
      margin-right: 5px;
    }
  }

  .info_description {
    max-width: 600px;
    margin: 15px 0px;
  }

  ul {
    display: flex;
    gap: 20px;

    i {
      font-size: 20px;
    }
  }
`;

export const SettingsContainer = styled.section`
  width: 600px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: var(--color-bg-200);
  position: absolute;
  top: 0;
  right: 0;
  margin-top: -60px;
  padding: 20px;

  .form_input-heading {
    margin: 30px 0px;
    font-size: 20px;
    border-bottom: 1px solid var(--color-dec-100);
    padding-bottom: 10px;
  }

  .form_input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    height: 40px;
    border: none;
    padding: 0px 10px;
    margin-top: 10px;
    background-color: hsl(0, 0%, 0%, 0.5);
    color: var(--color-font-200);

    &:active {
      outline: var(--color-accent-100);
    }
  }

  input[type='file'] {
    height: auto;
    background-color: transparent;
    padding: 0px;
    margin-top: 0px;
  }

  textarea {
    background-color: hsl(0, 0%, 0%, 0.5);
    border: none;
    margin-top: 10px;
    height: 200px;
  }
`;

export const Form = styled.form``;
