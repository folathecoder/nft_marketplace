import React from 'react';
import {
  SettingsContainer,
  Form,
} from 'components/pages/profile/ProfileStyles';

const ProfileSettings = () => {
  return (
    <SettingsContainer>
      <div>
        <Form>
          <div className="form_input-heading">Profile picture</div>
          <div className="form_input-container ">
            <input
              type="file"
              name="userPicture"
              id="userPicture"
              className="userPicture"
            />
          </div>
          <div className="form_input-heading">Socials</div>
          <div className="form_input-container ">
            <label htmlFor="userName">Name</label>
            <input type="text" name="userName" id="userName" />
          </div>
          <div className="form_input-container ">
            <label htmlFor="userDescription">Description</label>
            <textarea name="userDescription" id="userDescription" />
          </div>
          <div className="form_input-heading">Socials</div>
          <div className="form_input-container ">
            <label htmlFor="userTwitter">Twitter</label>
            <input type="text" name="userTwitter" id="userTwitter" />
          </div>
          <div className="form_input-container ">
            <label htmlFor="userWebsite">Website</label>
            <input type="text" name="userWebsite" id="userWebsite" />
          </div>
          <div className="form_input-container ">
            <label htmlFor="userDiscord">Discord</label>
            <input type="text" name="userDiscord" id="userDiscord" />
          </div>
          <div className="form_input-container ">
            <label htmlFor="userTelegram">Telegram</label>
            <input type="text" name="userTelegram" id="userTelegram" />
          </div>
        </Form>
      </div>
    </SettingsContainer>
  );
};

export default ProfileSettings;
