import React, { useEffect, useState } from "react";
import "./Search.css";
import Results from "./Results";
import { useStateValue } from "./StateProvider";

function Search({ spotify }) {
  const [{ term, playlists, discover_weekly }, dispatch] = useStateValue();
  const [results, setResults] = useState();
  useEffect(() => {
    spotify.searchTracks(term).then((response) => {
      setResults(response?.tracks);
    });
  }, [term]);
  return (
    <div>
      {results?.items.length !== 0 ? (
        results?.items.map((item) => (
          <Results
            id={item.id}
            img={item?.album?.images[0].url}
            date={item?.album.release_date}
            name={item?.album.name}
            type={item?.type}
            popularity={item?.popularity}
            length={results?.items.length}
          />
        ))
      ) : (
        <>
          <center>
            <h1>
              <em>
                <strong>
                  <i>NO RESULTS FOUND</i>
                </strong>
              </em>
            </h1>
            <img src="/no_results.png" className="no" alt="" />
          </center>
        </>
      )}
    </div>
  );
}

export default Search;
