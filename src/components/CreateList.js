import "../css/CreateList.css";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API;
const BEARER = process.env.REACT_APP_BEARER;

export default function CreateList() {
  //demande de req token pour avoir l'acess token
  const [reqToken, setReqToken] = useState();

  const requestToken = async () => {
    const query = await axios({
      method: "post",
      url: "https://api.themoviedb.org/4/auth/request_token",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + BEARER,
      },
    });

    console.log(query.data.request_token);
    window.open(
      "https://www.themoviedb.org/auth/access?request_token=" +
        query.data.request_token,
      "_blank"
    );
  };

  useEffect(() => {}, []);

  return (
    <>
      {reqToken ? null : <button onClick={requestToken}>create my list</button>}
    </>
  );
}
