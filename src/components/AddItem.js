import "../css/List.css";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API;

export default function List(props) {
  const [toggleList, setToggleList] = useState(false);
  const [listCreated, setlistCreated] = useState(null);

  // function createList() {
  //   axios({
  //     method: "post",
  //     url:
  //       "https://api.themoviedb.org/3/list?api_key=" +
  //       API +
  //       "&session_id=" +
  //       props.session,
  //     headers: {},
  //     data: {
  //       name: props.name,
  //       description: props.resume,
  //     },
  //   })
  //     .catch((err) => console.log(err))
  //     .then((res) => setlistCreated(res));
  //   console.log(listCreated);
  // }

  return (
    <button
      onClick={() => {
        if (listCreated === null) {
          // createList();
        }
        // if (props.idM !== null) {
        //   setToggleList(props.idM);
        // }
      }}
    >
      {/* {toggleList}
      {props.name} */}
      {props.tokenrequest}
      Add to my list !
    </button>
  );
}
