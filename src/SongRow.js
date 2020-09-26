import React from "react";
import "./SongRow.css";

function SongRow({ track, playSong, playlist, name, type, desc, createdBy }) {
  return (
    <div
      className={`songRow ${playlist !== "true" && "play"}`}
      onClick={() => playSong(track)}
    >
      <div className={`songRow__info ${playlist !== "true" && "play"}`}>
        {playlist === "true" ? (
          <>
            <iframe
              id="flame"
              src={`https://open.spotify.com/embed/playlist/${track}`}
              width="500"
              height="500"
              frameBorder="0"
              frameBroderRadius="20"
              allowTransparency="true"
              allowFullScreen="true"
              allow="encrypted-media"
            ></iframe>
            <div className="div">
              <p>{type.toUpperCase()}</p>
              <h1>{name.toUpperCase()}</h1>
              <h5>
                Desc:{" "}
                {desc === ""
                  ? "You haven't set any description for this 'PLAYLIST'"
                  : desc}
              </h5>
              <h6>CreatedBy: {createdBy}</h6>
            </div>
          </>
        ) : (
          <>
            <img
              src={track?.album.images[0].url}
              className="songRow__album"
              alt=""
            />
            <iframe
              id="flame"
              src={`https://open.spotify.com/embed/track/${track?.id}`}
              width="1200"
              height="85"
              frameBorder="0"
              frameBroderRadius="20"
              allowTransparency="true"
              allowFullScreen="true"
              allow="encrypted-media"
            ></iframe>
          </>
        )}
      </div>
    </div>
  );
}

export default SongRow;
