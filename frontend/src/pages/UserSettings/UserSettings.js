import React, { useState } from 'react';
import { useGlobalState, setUser, setMessage, setError } from '../../store';
import Tab from '../../components/Tab';
import AccountSettings from '../../components/AccountSettings';
import {updateUser} from '../../api';

import './usersettings.scss';

const tabList = [
  {key: "account-settings", title: "Account Settings"}, 
  {key: "user-information", title: "User Information"}
];

const UserSettings = () => {
  const [user] = useGlobalState('user');
  const setUserData = (user) => {
    updateUser(user)
    .then((res) => {
      setUser({...res.user});
      setMessage(res.message);
      setTimeout(() => setMessage(''), 3000);
    }, (err) => {
      setError(err.error);
      setTimeout(() => setError(''), 3000);
    });
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