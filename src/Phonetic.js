import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <br />
      <a href={props.phonetic.audio}>Listen</a>

      <span className="text">{props.phonetic.text} </span>
    </div>
  );
}
