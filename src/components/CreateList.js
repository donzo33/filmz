import "../css/CreateList.css";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API;
const BEARER = process.env.REACT_APP_BEARER;

export default function CreateList() {
  //demande de req token pour avoir l'acess token
  const [reqToken, setReqToken] = useState();
  function requestToken() {
    axios({
      method: "post",
      url: "https://api.themoviedb.org/4/auth/request_token",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + BEARER,
      }
    })
  
      .then((res) => {
        window.location =
          "https://www.themoviedb.org/auth/access?request_token=" +
          res.data.request_token;
      })
    //   .then((res) => {
    //     axios({
    //       method: "post",
    //       url: "https://api.themoviedb.org/4/auth/access_token",
    //       data: {
    //         request_token: res.data.request_token,
    //       },
    //       headers: {
    //         "Content-Type": "application/json",
    //         authorization: "Bearer " + BEARER,
    //       },
    //     });
    //   })
    //   .then((res) => console.log(res));
    // function acessToken() {
    //   console.log(reqToken);
    //   //   axios({
    //   //     method: "post",
    //   //     url: "https://api.themoviedb.org/4/auth/access_token",
    //   //     data: {
    //   //       request_token: reqToken,
    //   //     },
    //   //     headers: {
    //   //       "Content-Type": "application/json",
    //   //       authorization: "Bearer " + BEARER,
    //   //     },
    //   //   });
    }
  }

  useEffect(() => {}, []);

  return (
    <>
      {reqToken ? null : <button onClick={requestToken}>create my list</button>}
    </>
  );
}
