import React, { useState, useEffect } from "react";
import "./styles.css";
import NotLogged from "./NotLogged";

function Logged() {
  const [Logged, setLogged] = useState([]);

  return (
      
    <div><center>
        <NotLogged />
      <h1>//Amelov kod ovdje:</h1>
    </center></div>
  );
}

export default Logged;