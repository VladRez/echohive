import React from 'react';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
// import NavBarContainer from './nav/navbar_container';

import TracksContainer from './tracks/tracks_container';
// import MainPage from './main/main_page';
// import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';
// import ProfileContainer from './profile/profile_container';
import TrackComposeContainer from './tracks/track_compose_container';

const App = () => (
    <div>
        {/* <NavBarContainer /> */}
        <Switch>
            {/* <AuthRoute exact path="/" component={MainPage} /> */}
            {/* <AuthRoute exact path="/login" component={LoginFormContainer} /> */}
            {/* <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}

            <Route exact path="/tracks" component={TracksContainer} />
            {/* <Route exact path="/userprofile/:trackId" component={TrackContainer} /> */}
            <Route exact path="/new_track" component={TrackComposeContainer} />
        </Switch>
    </div>
);

export default App;