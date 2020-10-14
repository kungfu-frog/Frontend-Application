import React, { useState } from 'react';
import { useGlobalState } from '../../store';
import Tab from '../../components/Tab';

import './usersettings.scss';

const tabList = [
  {key: "account-settings", title: "Account Settings"}, 
  {key: "user-information", title: "User Information"}
];

const UserSettings = () => {
  return (
    <div className="col-md-8">
      <Tab tabList={tabList}>
        <div key="account-settings">
          Account-Settings
        </div>
        <div key="user-information">
          User Information
        </div>
      </Tab>
    </div>
  );
}

export default UserSettings;