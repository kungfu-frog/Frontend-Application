import React, { useState } from 'react';
import { useGlobalState, setUser } from '../../store';
import Tab from '../../components/Tab';
import AccountSettings from '../../components/AccountSettings';

import './usersettings.scss';

const tabList = [
  {key: "account-settings", title: "Account Settings"}, 
  {key: "user-information", title: "User Information"}
];

const UserSettings = () => {
  const [user] = useGlobalState('user');
  const setUserData = (user) => {
    
  }

  return (
    <div className="col-xl-8">
      <Tab tabList={tabList}>
        <Tab.Item key="account-settings">
          <AccountSettings user={user} setUser={setUserData}/>
        </Tab.Item>

        <Tab.Item key="user-information">
          User Information
        </Tab.Item>
      </Tab>
    </div>
  );
}

export default UserSettings;