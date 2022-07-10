import React from 'react';
import { MenuContainer, MenuItem } from './SettingsMenuStyles';
import { settingsMenu } from 'cms/global/appMenu';
import { ClickAwayListener } from '@mui/base';

type Props = {
  setSettingsToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const SettingsMenu = ({ setSettingsToggle }: Props) => {
  return (
    <ClickAwayListener onClickAway={() => setSettingsToggle(false)}>
      <MenuContainer>
        {settingsMenu.map((item, index) => {
          return (
            <MenuItem
              key={item.id}
              lastItem={index === settingsMenu.length - 1}
              onClick={() => setSettingsToggle(false)}
            >
              <span>{item.menuTitle}</span>
              <span>
                <i className={item.menuIconClass}></i>
              </span>
            </MenuItem>
          );
        })}
      </MenuContainer>
    </ClickAwayListener>
  );
};

export default SettingsMenu;
