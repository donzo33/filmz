import "../css/DetailsM.css";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API;

export default function DetailsM(props) {
  //on fetch en async les donnée avec le props id
  const [detailM, setDetailM] = useState();
  useEffect(() => {
    const fetching = async () => {
      const query = await axios.get(
        "https://api.themoviedb.org/3/movie/" +
          props.idM +
          "?api_key=" +
          API +
          "&language=en-US"
      );
      setDetailM(query.data);
    };
    fetching();
  }, []);

  return (
    <div className="details">
      {detailM ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <h3>{detailM.title} </h3>
          </div>
          <div style={{ padding: "0.5%" }}>
            <i>{detailM.overview}</i>
          </div>
          <div>
            <b>author:</b>
            {detailM.production_companies[0].name}
          </div>
          <div>
            <b>genres: </b>
            {detailM.genres.map((element) => element.name + " ")}
          </div>
          <div>
            <b>language: </b>
            {detailM.spoken_languages.map(
              (element) => element.english_name + " "
            )}
          </div>
          <div>
            <b>runtime: </b>
            {detailM.runtime} minutes
          </div>
          <div>
            <b>release date: </b> {detailM.release_date}
          </div>
          <div>
            <b>Average vote: </b> {detailM.vote_average}
          </div>
          <div>
            <b> Number of vote: </b> {detailM.vote_count}
          </div>
        </div>
      ) : (
        <>
          <h1>Loading...</h1>
        </>
      )}
    </div>
  );
}
