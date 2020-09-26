import React, { useState } from "react";
import "./Header.css";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { Avatar, IconButton } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import CancelTwoToneIcon from "@material-ui/icons/CancelTwoTone";
import { useHistory } from "react-router-dom";

function Header({ spotify }) {
  const [{ user }, dispatch] = useStateValue();
  const [term, setTerm] = useState();
  const history = useHistory();
  const clear = (e) => {
    e.preventDefault();
    setTerm("");
  };
  const handleChange = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_TERM",
      term: term,
    });
    history.push("/search");
    setTerm("");
  };
  return (
    <div className="header">
      <form className="header__left">
        <SearchRoundedIcon />
        <input
          value={term}
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search For Artists, Songs or Podcasts"
        />
        {term === " " ? (
          setTerm("")
        ) : (
          <>
            {" "}
            <CancelTwoToneIcon cursor="pointer" onClick={clear} />
            <button type="submit" onClick={handleChange}>
              Search
            </button>
          </>
        )}
      </form>
      <div className="header__right">
        {user?.images?.map((img) => (
          <Avatar src={img?.url} alt={user?.display_name} />
        ))}
        <h4>{user?.display_name}</h4>
        <IconButton>
          <ExpandMoreRoundedIcon className="icn" />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
