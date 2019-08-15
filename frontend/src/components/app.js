import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import React from "react";
import MainPage from "./main/main_page";
import TrackComposeContainer from "./tracks/track_compose_container";
import TrackShowContainer from "./tracks/track_show_container";
import TracksContainer from "./tracks/tracks_container";
import SessionPage from "./session/session_container";
import NavBarContainer from "./nav/navbar_container";
import SessionModal from "./modal/session_form_modal";

const App = () => (
  <div>
    <SessionModal />
    <NavBarContainer />
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
    </Switch>
  </div>
);

export default App;
