import React from 'react';
import { ProfileContainer } from 'components/pages/profile/ProfileStyles';
import {
  ProfileHeaderSection,
  ProfileNFTs,
  ProfileInfo,
  ProfileSettings,
} from 'components/pages/profile';
import { ProfileProvider } from 'components/pages/profile/Context/ProfileContext';
import { Main } from 'theme/globalStyles';

const Profile = () => {
  return (
    <ProfileProvider>
      <Main>
        <ProfileContainer>
          <ProfileHeaderSection />
          <ProfileInfo />
          <ProfileNFTs />
        </ProfileContainer>
        <ProfileSettings />
      </Main>
    </ProfileProvider>
  );
};

export default Profile;
