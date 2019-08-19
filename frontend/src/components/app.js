import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import React from "react";

/* Project Components */
import TrackComposeContainer from "./tracks/track_compose_container";
import TrackShowContainer from "./tracks/track_show_container";
import TracksContainer from "./tracks/tracks_container";
import UserProfileContainer from "./user/user_profile_container";
import SessionPage from "./session/session_container";
import NavBarContainer from "./nav/navbar_container";
import SessionModal from "./modal/session_form_modal";

const App = () => (
  <div>
    <SessionModal />
    <NavBarContainer />
    <div className="app-container app-content">
     
      <Switch>
      <AuthRoute exact path="/" component={SessionPage} />
      <ProtectedRoute exact path="/feed" component={TracksContainer} />
      <ProtectedRoute
        exact
        path="/tracks/upload"
        component={TrackComposeContainer}
      />
      <ProtectedRoute
        exact
        path="/tracks/:trackId"
        component={TrackShowContainer}
      />

      <ProtectedRoute
        exact
        path="/user/:userId"
        component={UserProfileContainer}
      />
    </Switch>
     
    </div>
  </div>
);

export default App;
