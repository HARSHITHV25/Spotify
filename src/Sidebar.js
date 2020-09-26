import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import LibraryMusicRoundedIcon from "@material-ui/icons/LibraryMusicRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Sidebar() {
  const [{ playlists }, dispatch] = useStateValue();
  console.log(playlists);
  return (
    <div className="sidebar">
      <Link to="/">
        <img
          className="sidebar__logo"
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt=""
        />
      </Link>
      <Link to="/">
        <SidebarOption option="Home" Icon={HomeRoundedIcon} />
      </Link>
      <SidebarOption option="Search" Icon={SearchRoundedIcon} />
      <SidebarOption option="Library" Icon={LibraryMusicRoundedIcon} />
      <br />
      <strong className="sidebar__title">
        {playlists?.items?.length > 1
          ? "PLAYLISTS"
          : playlists?.items?.length === 0
          ? "NO PLAYLISTS"
          : "PLAYLIST"}
      </strong>
      <hr />
      {playlists?.items?.map((playlist) =>
        playlist?.images?.map((image) => (
          <>
            <Link to="/playlists">
              <SidebarOption
                isPlaylists
                image={image.url}
                option={playlist.name}
              />
            </Link>
          </>
        ))
      )}
    </div>
  );
}

export default Sidebar;
