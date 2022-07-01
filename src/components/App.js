import "../css/App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import DetailsM from "./DetailsM";
import DetailsTv from "./DetailsTv";
import Search from "./Search";
import List from "./List";
import AddItem from "./AddItem";

const pathToImg = "https://image.tmdb.org/t/p/w500";
const API = process.env.REACT_APP_API;

function App() {
  const [listedM, setListedM] = useState();
  const [listedTv, setListedTv] = useState();
  const [toggledM, setToggleM] = useState(false);
  const [toggledTv, setToggleTv] = useState(false);
  const [tokenRequest, setTokenRequest] = useState(null);
  const [session, setSession] = useState();
  const [idM, setIdM] = useState();
  const [idTv, setIdTv] = useState();

  //on useEffect et on fait une const en async pour aller chercher les movie popular et les series puis on rentre les data directement dans props
  //car avec axios on a pas besoin de parse notre réponse
  //create une tokenrequest  afin de pouvoir creer une liste
  useEffect(() => {
    const fetching = async () => {
      const query = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=" +
          API +
          "&language=en-US&page=1"
      );
      setListedM(query.data.results);
    };

    const fetching2 = async () => {
      const query = await axios.get(
        " https://api.themoviedb.org/3/tv/popular?api_key=" +
          API +
          "&language=en-US&page=1"
      );

      setListedTv(query.data.results);
    };

    fetching();
    fetching2();
  }, []);

  return (
    <div className="App">
      <div style={{ textAlign: "center", width: "100%" }}>
        <h1>Welcome To filmz</h1>
      </div>
      <>
        <Search />
      </>
      {/* Request token OK , to do : store token in locastorage and ask access token for create the list
       <>
        <List tokenrequest={tokenRequest} />
      </> */}
      <div className="titleSection">
        <h2>Popular Films</h2>
      </div>
      {listedM ? (
        listedM.map((movie) => (
          <div id="listedContainer" key={movie.id} className={movie.id}>
            <div
              onMouseEnter={() => {
                setToggleM(true);
                setIdM(movie.id);
              }}
              onMouseLeave={() => {
                setToggleM(false);
                setIdM(null);
              }}
              // add a onclick + fallback for mobile
              onClick={() => {
                if (toggledM === true) {
                  setToggleM(false);
                  setIdM(null);
                } else {
                  setToggleM(true);
                  setIdM(movie.id);
                }
              }}
            >
              <img
                style={{ width: "100%" }}
                src={pathToImg + movie.poster_path}
              />
              {toggledM ? <DetailsM idM={idM} /> : null}
              {/* <AddItem
                name={movie.original_title}
                resume={movie.overview}
                idM={idM}
                tokenrequest={tokenRequest}
              /> */}
            </div>
            <div>title :{movie.original_title}</div>
            <div>
              rating:{movie.vote_average}/10 <i>({movie.vote_count} votes)</i>
            </div>
            <div>popularity:{movie.popularity}</div>
          </div>
        ))
      ) : (
        <h1>loading</h1>
      )}
      <div className="titleSection">
        <h2>Popular series</h2>
      </div>
      {listedTv ? (
        listedTv.map((tv) => (
          <div id="listedContainer" key={tv.id} className={tv.id}>
            <div
              onMouseEnter={() => {
                setToggleTv(true);
                setIdTv(tv.id);
              }}
              onMouseLeave={() => {
                setToggleTv(false);
                setIdTv(null);
              }}
              // add a onclick + fallback for mobile
              onClick={() => {
                if (toggledTv === true) {
                  setToggleTv(false);
                  setIdTv(null);
                } else {
                  setToggleTv(true);
                  setIdTv(tv.id);
                }
              }}
            >
              <img style={{ width: "100%" }} src={pathToImg + tv.poster_path} />
              {toggledTv ? <DetailsTv idTv={idTv} /> : null}
              {/* <AddItem
                name={tv.original_title}
                resume={tv.overview}
                idTv={idTv}
                tokenrequest={tokenRequest}
              /> */}
            </div>
            <div>title :{tv.original_title}</div>
            <div>
              rating:{tv.vote_average}/10 <i>({tv.vote_count} votes)</i>
            </div>
            <div>popularity:{tv.popularity}</div>
          </div>
        ))
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
}

export default App;
