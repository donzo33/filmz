import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API;

export default function AddItem(props) {
  return (
    <button>
      {/* {toggleList}
      {props.name} */}
      {props.tokenrequest}
      Add to my list !
    </button>
  );
}
