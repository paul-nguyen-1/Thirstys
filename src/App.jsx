import { useState } from "react";
import "./App.css";
import Shots from "./components/Shots";

function App() {
  const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/";
  const VITE_API_KEY = import.meta.env.VITE_API_KEY;
  const [attributes, setAttributes] = useState({
    strDrink: "ABC",
    strCategory: "shot",
    strGlass: "shot glass",
    strIngredient1: "Amaretto",
  });
  const [seenImgs, setSeenImgs] = useState([]);
  const [currentImg, setCurrentImg] = useState(null);

  // const makeQuery = () => {
  //   fetch(`${BASE_URL}${VITE_API_KEY}/random.php`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

  // Set up API image once we click button
  const handleClick = (e) => {
    // setAttributes((prevState) => ({
    //   ...prevState,
    //   [e.target.name]: e.target.value.trim(),
    // }));
    makeQuery();
  };

  //Query set up
  const makeQuery = () => {
    let query = `${BASE_URL}${VITE_API_KEY}/random.php`;
    callAPI(query).catch(console.error);
  };

  //Call API
  const callAPI = async (query) => {
    const response = await fetch(query);
    const json = await response.json();
    if (json.drinks == null) {
      console.log(json);
      alert("Oops! Something went wrong with that query, let's try again!");
    } else {
      console.log(json.drinks[0].strDrinkThumb);
      setCurrentImg(json.drinks[0].strDrinkThumb);
    }
  };

  return (
    <div className="App">
      <div className="seenContainer">
        <h3>What have we seen so far?</h3>
      </div>
      <Shots
        attributes={attributes}
        currentImg={currentImg}
        handleClick={handleClick}
      />
      <div className="banContainer">
        <h3>Ban List</h3>
        <h4>Select an attribute in your listing to ban it</h4>
      </div>
    </div>
  );
}

export default App;
