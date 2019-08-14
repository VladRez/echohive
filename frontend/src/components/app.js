import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';


import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SessionPage from './session/session_container'

import SessionModal from './modal/session_form_modal'

const App = () => (
    <div>
      <SessionModal/>
      <Switch>
          <AuthRoute exact path="/" component={SessionPage} />
          {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
          <ProtectedRoute path="/feed" component={MainPage}/>
      </Switch>
    </div>
  );
  
  export default App;