import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let [name, setName] = useState("");
  let [firstName, setFirstName] = useState("");

  const handleClick = () => {
    if (name === "" || firstName === "")
      return alert("Both filed must be filled");
  };

  return (
    <div className="App">
      <div className="block">
        In this exercise you will have to:
        <ul>
          <li>
            Listen to every change (event <b>onChange</b>) and store each value
            in a State.
          </li>
          <li>
            Listen to the <b>submit</b> event and if one field is empty, show an
            alert.
          </li>
        </ul>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/docs/forms.html"
        >
          Help
        </a>
      </div>
      <div className="block">
        <form>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <button onClick={handleClick}>Valider</button>
        </form>
      </div>
    </div>
  );
}
