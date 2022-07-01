import "../css/List.css";
import { useState, useEffect } from "react";
import axios from "axios";
import CreateList from "./CreateList";

const API = process.env.REACT_APP_API;

export default function List(props) {
  //on get la list de l'user et on render dans le component
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
          My list
        </div>
      ) : (
        <div className="burger">
          <CreateList />
          <div
            onClick={() => {
              setToggleList(true);
            }}
          >
            Open my list
          </div>
        </div>
      )}
    </div>
  );
}
