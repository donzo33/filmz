import "../css/Search.css";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API;
export default function Search() {
  //on fetch en async les donnée avec le props id
  const [finder, setfinder] = useState(null);
  const [found, setfound] = useState(false);
  const [idSearch, setidSearch] = useState();
  const [name, setName] = useState("https://www.google.com/search?q=");

  function fetching() {
    axios
      .get(
        "https://api.themoviedb.org/3/search/multi?api_key=" +
          API +
          "&language=en-US&query=" +
          finder +
          "&page=1&include_adult=false"
      )
      .catch((err) => console.log(err))
      .then((res) => setfound(res.data.results));
    setfinder(null);
  }

  return (
    <div className="search">
      {found ? (
        <div className="found">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setfound(null);
            }}
          >
            <h2> Go Back !</h2>
          </div>
          {found.map((find) => (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open(name + find.name, "_blank");
              }}
              key={find.id}
            >
              <h4>{find.name}</h4>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          <input
            onChange={(e) => {
              setfinder(e.target.value);
            }}
          />
          <button
            style={{ backgroundColor: "#db0000", color: "white" }}
            type="submit"
            onClick={finder ? fetching : null}
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
}
