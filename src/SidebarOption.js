import React from "react";
import "./SidebarOption.css";

function SidebarOption({ option, Icon, image, isPlaylists }) {
  return (
    <div className={`sidebarOption ${isPlaylists && "playlists"}`}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h4>{option}</h4>
      ) : (
        <p className="sidebarOption__p">
          <img src={image} className="sidebarOption__image" alt="" />
          <span>{option}</span>
        </p>
      )}
    </div>
  );
}

export default SidebarOption;
