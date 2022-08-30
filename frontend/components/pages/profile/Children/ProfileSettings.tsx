import React, { useContext } from 'react';
import { ProfileContext } from 'components/pages/profile/Context/ProfileContext';
import {
  SettingsContainer,
  Form,
} from 'components/pages/profile/ProfileStyles';

const ProfileSettings = () => {
  const { toggleSettings, setToggleSettings } = useContext(ProfileContext);

  const handleClickAway = () => {
    if (toggleSettings === true) {
      setToggleSettings(false);
    }
  };

  return (
    <SettingsContainer toggleSettings={toggleSettings}>
      <div>
        <button onClick={() => setToggleSettings(!toggleSettings)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
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
