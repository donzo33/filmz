import "../css/DetailsM.css";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API;
export default function DetailsTv(props) {
  //on fetch en async les donnée avec le props id
  const [detailTv, setDetailTv] = useState();

  useEffect(() => {
    const fetching = async () => {
      const query = await axios.get(
        "https://api.themoviedb.org/3/tv/" +
          props.idTv +
          "?api_key=" +
          API +
          "&language=en-US"
      );
      setDetailTv(query.data);
    };
    fetching();
  }, []);

  return (
    <div className="details">
      {detailTv ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <h3>{detailTv.name} </h3>
          </div>
          <div>
            <i>{detailTv.overview}</i>
          </div>
          {/* <div>
            <b>author:</b>
            {detailTv.production_companies[0] === undefined
              ? detailTv.production_companies[0].name
              : null}
          </div> */}
          <div>
            <b>genres: </b>
            {detailTv.genres.map((element) => element.name + " ")}
          </div>
          <div>
            <b>language: </b>
            {detailTv.spoken_languages.map(
              (element) => element.english_name + " "
            )}
          </div>
          <div>
            <b>number of seasons : {detailTv.number_of_seasons} </b>
          </div>
          <div>
            <b>number of episodes : </b>
            {detailTv.number_of_episodes} minutes
          </div>
          <div>
            <b>release date: </b> {detailTv.first_air_date}
          </div>
          <div>
            <b>Average vote: </b> {detailTv.vote_average}
          </div>
          <div>
            <b> Number of vote: </b> {detailTv.vote_count}
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
