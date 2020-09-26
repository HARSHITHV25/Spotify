import React, { useEffect } from "react";
import "./Footer.css";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatRoundedIcon from "@material-ui/icons/RepeatRounded";
import SkipPreviousRoundedIcon from "@material-ui/icons/SkipPreviousRounded";
import SkipNextRoundedIcon from "@material-ui/icons/SkipNextRounded";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PlaylistPlayRoundedIcon from "@material-ui/icons/PlaylistPlayRounded";
import { makeStyles } from "@material-ui/core/styles";
import VolumeDownRoundedIcon from "@material-ui/icons/VolumeDownRounded";
import { Grid, IconButton, Slider, Typography } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}`;
}

function Footer({ spotify, isPlaylist }) {
  const [{ token, item, playing }, dispatch] = useStateValue();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      console.log(r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      // spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      // spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    // spotify.skipToNext();
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
  };

  const skipPrevious = () => {
    // spotify.skipToPrevious();
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
  };

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src={
            isPlaylist === "true"
              ? "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSumrfMWxAcjTPd7lsZ6fw19L8Ps7hBIZ9THg&usqp=CAU"
              : item?.album?.images[0].url
          }
          alt=""
        />
        {item ? (
          <div className="footer__songInfo">
            <h4>{isPlaylist === "true" ? "PLAYLIST" : item?.name}</h4>
            <p>
              {isPlaylist === "true"
                ? "THE GREAT YOU"
                : item?.artists?.map((artist) => artist.name).join(", ")}
            </p>
          </div>
        ) : (
          <div className="footer__songInfo">
            <h4>Click on a Song to play</h4>
            <p>..</p>
          </div>
        )}
      </div>
      <div className="footer__center">
        <IconButton>
          <ShuffleIcon className="footer__green" onClick={skipNext} />
        </IconButton>
        <IconButton>
          <SkipPreviousRoundedIcon className="footer__icon" />
        </IconButton>
        <IconButton>
          {playing ? (
            <PauseCircleOutlineIcon
              onClick={handlePlayPause}
              fontSize="large"
              className="footer__icon"
            />
          ) : (
            <PlayCircleOutlineIcon
              onClick={handlePlayPause}
              fontSize="large"
              className="footer__icon"
            />
          )}{" "}
        </IconButton>
        <IconButton>
          <SkipNextRoundedIcon
            onClick={skipPrevious}
            className="footer__icon"
          />
        </IconButton>
        <IconButton>
          <RepeatRoundedIcon className="footer__green" />
        </IconButton>
      </div>
      <div className="footer__right">
        <Grid container spacing={3}>
          <Grid item>
            <PlaylistPlayRoundedIcon cursor="pointer" />
          </Grid>
          <Grid item>
            <VolumeDownRoundedIcon cursor="pointer" />
          </Grid>
          <Grid item>
            <Typography cursor="pointer" id="input-slider" gutterBottom>
              Volume:
            </Typography>
          </Grid>
          <Grid item xs>
            <Slider
              defaultValue={50}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={5}
              marks
              min={0}
              max={100}
              max-width={1000}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
