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
import NavPlayer from "./nav_player/nav_player_container";
import FooterContainer from "./nav/footer_container";



const App = () => (
  <div className="app-container">
    <SessionModal />
    <NavBarContainer />

    <AuthRoute exact path="/" component={SessionPage} />
    <div className="app-content">
      <Switch>
        <ProtectedRoute exact path="/feed" component={TracksContainer} />

        <ProtectedRoute
          exact
          path="/track/:trackId"
          component={TrackShowContainer}
        />

        <ProtectedRoute
          exact
          path="/tracks/upload"
          component={TrackComposeContainer}
        />

        <ProtectedRoute
          exact
          path="/user/:userId"
          component={UserProfileContainer}
        />

      </Switch>

    </div>

    <NavPlayer />
  </div>
);

export default App;
