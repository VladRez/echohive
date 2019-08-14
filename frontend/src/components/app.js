import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import TrackComposeContainer from './tracks/track_compose_container';
import TrackShowContainer from './tracks/track_show_container';
import TracksContainer from './tracks/tracks_container';
import SessionPage from './session/session_container'

import SessionModal from './modal/session_form_modal'

const App = () => (
    <div>
      <SessionModal/>
      <Switch>
          <AuthRoute exact path="/" component={SessionPage} />
          {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
            <ProtectedRoute path="/feed" component={MainPage} />

            <Route exact path="/feed" component={TracksContainer} />
            <Route exact path="/tracks/newtrack" component={TrackComposeContainer} />
            <Route exact path="/tracks/:trackId" component={TrackShowContainer} />
      </Switch>
    </div>
  );
  
  export default App;
