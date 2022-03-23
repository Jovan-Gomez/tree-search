import React from 'react';
import { Route } from 'react-router-dom';

import { Search } from '../components/Search';
import UserInfo from '../components/UserInfo';

export const BaseRouter = () => {
  return (
    <>
      <Route exact path="/" component={Search} />
    </>
  );
};

export const UserRouter = () => {
  return (
    <>
      <Route exact path="/:userName" component={UserInfo} />
    </>
  );
};
