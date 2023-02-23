import { useState } from "react";
import "./App.css";

function App() {
  const BASE_URL = "www.thecocktaildb.com/api/json/v1/";
  const API_KEY = import.meta.env.API_KEY;

  const makeQuery = () => {};

  const callAPI = () => {};
  const [submit, setSubmit] = useState("");
  return (
    <div className="App">
      <div className="seenContainer">
        <h3>What have we seen so far?</h3>
      </div>
      <div className="discoverContainer">
        <h1>Shots! Shots! Shots!</h1>
        <h2>Discover the best drinks from your wildest dreams.</h2>
        <p>🍺🍻🍷🍸🍹🥂🥃🍶🍾</p>
        <button>Discover! 🔀</button>
      </div>
      <div className="banContainer">
        <h3>Ban List</h3>
        <h4>Select an attribute in your listing to ban it</h4>
      </div>
    </div>
  );
}

export default App;
