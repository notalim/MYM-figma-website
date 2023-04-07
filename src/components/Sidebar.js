import React from 'react';
import {
  SidebarContainer,
  Logo,
  LogoWrapper,
  MenuItem,
  Icon,
  TrialBanner,
  TrialText,
  UpgradeButton,
  LogoutButton,
  MenuSpacer,
  TrialTextTop
} from './SidebarStyles';

const Sidebar = () => {
  return (
      <SidebarContainer>
          <LogoWrapper>
              <Icon src="../../assets/logo.svg" />
              <Logo>Realply</Logo>
          </LogoWrapper>
          <MenuItem>
              <Icon
                  src="../../assets/vuesax/linear/grid-3.png"
                  alt="Dashboard"
              />
              Dashboard
          </MenuItem>
          <MenuItem>
              <Icon
                  src="../../assets/vuesax/linear/message.png"
                  alt="Messages"
              />
              Messages
          </MenuItem>
          <MenuItem>
              <Icon
                  src="../../assets/vuesax/linear/calculator.png"
                  alt="Calendar"
              />
              Calendar
          </MenuItem>
          <MenuItem>
              <Icon
                  src="../../assets/vuesax/linear/flash.svg"
                  alt="Campaigns"
              />
              Campaigns
          </MenuItem>
          <MenuSpacer />
          <MenuItem>
              <Icon
                  src="../../assets/vuesax/linear/setting-3.png"
                  alt="Settings"
              />
              Settings
          </MenuItem>
          <MenuItem>
              <Icon src="../../assets/vuesax/linear/danger.png" alt="Help" />
              Help
          </MenuItem>
          <TrialBanner>
              <TrialTextTop>Your free trial is about to end in</TrialTextTop>
              <TrialText large>10 days.</TrialText>
              <TrialText desc>
                  You will not be billed during your free trial. To keep your
                  projects running after the trial end, upgrade to a paid
                  option.
              </TrialText>
              <UpgradeButton>Upgrade</UpgradeButton>
          </TrialBanner>
          <LogoutButton>
              <Icon
                  src="../../assets/vuesax/linear/send-square.png"
                  alt="Logout"
              />
              Log out
          </LogoutButton>
      </SidebarContainer>
  );
};

export default Sidebar;
