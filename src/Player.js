import React from "react";
import { useStateValue } from "./StateProvider";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player({ spotify, isPlaylistRoute, isSearchRoute }) {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="player">
      <div className="player__body">
        {isPlaylistRoute === "true" ? (
          <>
            <Sidebar spotify={spotify} />
            <Body spotify={spotify} isPlaylist="true" />
          </>
        ) : isSearchRoute === "true" ? (
          <>
            <Sidebar spotify={spotify} />
            <Body spotify={spotify} isSearch="true" />
          </>
        ) : (
          <>
            <Sidebar spotify={spotify} />
            <Body spotify={spotify} />
          </>
        )}
      </div>
      {isPlaylistRoute === "true" ? (
        <Footer spotify={spotify} isPlaylist="true" />
      ) : (
        <Footer spotify={spotify} />
      )}
    </div>
  );
}

export default Player;
