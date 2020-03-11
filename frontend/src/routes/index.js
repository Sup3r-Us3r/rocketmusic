import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Musics from '../pages/Musics';
import Settings from '../pages/Settings';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/" exact component={Home} isPrivate />
      <Route path="/musics" component={Musics} isPrivate />
      <Route path="/settings" component={Settings} isPrivate />
    </Switch>
  );
}
