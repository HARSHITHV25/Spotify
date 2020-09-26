import React from "react";
import "./Body.css";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import Tilt from "react-parallax-tilt";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
import Search from "./Search";

function Body({ spotify, isPlaylist, isSearch }) {
  const [{ discover_weekly, playlists }, dispatch] = useStateValue();
  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (track) => {
    dispatch({
      type: "SET_ITEM",
      item: track,
    });
    dispatch({
      type: "SET_PLAYING",
      playing: true,
    });
  };
  return (
    <div className="body">
      <Header spotify={spotify} />
      {isPlaylist === "true" ? (
        <>
          {playlists?.items.map((item) => (
            <SongRow
              playSong={playSong}
              playlist="true"
              name={item.name}
              type={item.type}
              createdBy={"You ofcource"}
              desc={item.description}
              track={item.id}
            />
          ))}
        </>
      ) : isSearch === "true" ? (
        <Search spotify={spotify} />
      ) : (
        <>
          <div className="body__info">
            <Tilt
              options={{ max: 15 }}
              glareEnable={true}
              glareColor={"white"}
              glareMaxOpacity={1}
              glareReverse={true}
            >
              <img src={discover_weekly?.images[0]?.url} alt="" />
            </Tilt>
            <div className="body__infoText">
              <strong>PLAYLIST</strong>
              <h2>{discover_weekly?.name}</h2>
              <p>{discover_weekly?.description}</p>
              <small className="small">
                Spotify • {discover_weekly?.tracks?.items?.length} Songs •
                Recommended
              </small>
            </div>
          </div>
          <div className="body__songs">
            <div className="body__icons">
              <IconButton>
                <PlayCircleFilledIcon
                  className="body__shuffle white"
                  onClick={playPlaylist}
                />
              </IconButton>
              <IconButton>
                <FavoriteBorderIcon
                  fontSize={"large"}
                  color={"white"}
                  className="white fav"
                />
              </IconButton>
              <IconButton>
                <MoreHorizIcon className="white fav" />
              </IconButton>
            </div>
            {discover_weekly?.tracks.items.map((item) => (
              <SongRow playSong={playSong} track={item.track} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Body;
