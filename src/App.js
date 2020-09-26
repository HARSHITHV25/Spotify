import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./StateProvider";
import db from "./firebase";

const spotify = new SpotifyWebApi();
function App() {
  const [{ user, token }, dispatch] = useStateValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = "";
    if (_token) {
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
        dispatch({
          type: "SET_TOKEN",
          token: _token,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      // !37i9dQZEVXcJ3OSGYsyXxi
      spotify.getPlaylist("37i9dQZEVXcJ3OSGYsyXxi").then((res) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: res,
        })
      );
    }
  }, []);
  return (
    <div className="app">
      {!token ? (
        <Login />
      ) : (
        <Router>
          <Switch>
            <Route path="/search">
              <Player spotify={spotify} isSearchRoute="true" />
            </Route>
            <Route path="/playlists">
              <Player spotify={spotify} isPlaylistRoute="true" />
            </Route>
            <Route path="/">
              <Player spotify={spotify} />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
