import React from "react";
import "./Results.css";
import { useStateValue } from "./StateProvider";

function Results({ id, img, name, date, popularity, type, length }) {
  const [{ term }, dispatch] = useStateValue();
  return (
    <>
      <div className="results">
        <img src={img} alt="" />
        <iframe
          src={`https://open.spotify.com/embed/track/${id}`}
          width="1000"
          height="120"
          frameBorder="0"
          frameBroderRadius="20"
          allowTransparency="true"
          allowFullScreen="true"
          allow="encrypted-media"
        ></iframe>
        <div className="results__left">
          <h5>{name}</h5>
          <h5>Type : {type}</h5>
          <h5>Date Of Release : {date}</h5>
          <h5>Popularity : {popularity}/100</h5>
        </div>
      </div>
    </>
  );
}

export default Results;
