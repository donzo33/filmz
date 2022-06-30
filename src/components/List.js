import "../css/List.css";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API;

export default function List(props) {
  //on fetch en async les donnée avec le props id
  const [toggleList, setToggleList] = useState(false);

  return (
    <div>
      {toggleList === true ? (
        <div
          className="list"
          onClick={() => {
            setToggleList(false);
          }}
        >
          My list {props.session}
        </div>
      ) : (
        <div
          onClick={() => {
            setToggleList(true);
          }}
          className="burger"
        >
          Open my list
        </div>
      )}
    </div>
  );
}
