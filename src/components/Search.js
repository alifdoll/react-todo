import React, { useState, useCallback } from "react";
import axios from "axios";
import List from "./List";

const Search = () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);

  // set isMounted to false when we unmount the component
  //   useEffect(() => {
  //     return () => {
  //       isMounted.current = false;
  //     };
  //   }, []);

  //   useEffect(() => {});

  const searchHandler = useCallback(async () => {
    if (value) {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: value,
        },
      });
      console.log(data);
      setResults(data.query.search);
    }
  });

  return (
    <React.Fragment>
      <br />
      <br />
      <form className="ui form">
        <input
          type="text"
          placeholder="Search Wikipedia ...."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <br />
        <br />
      </form>
      <button className="ui button" onClick={searchHandler}>
        Search
      </button>
      <List results={results} />
    </React.Fragment>
  );
};

export default Search;
