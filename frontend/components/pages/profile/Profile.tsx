import React from 'react';
import { ProfileContainer } from 'components/pages/profile/ProfileStyles';
import {
  ProfileHeaderSection,
  ProfileNFTs,
  ProfileInfo,
  ProfileSettings,
} from 'components/pages/profile';

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileHeaderSection />
      <ProfileInfo />
      <ProfileNFTs />
      {/* <ProfileSettings /> */}
    </ProfileContainer>
  );
};

export default Profile;
