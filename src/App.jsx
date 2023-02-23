import { useState } from "react";
import "./App.css";
import Shots from "./components/Shots";

function App() {
  const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/";
  const VITE_API_KEY = import.meta.env.VITE_API_KEY;
  const [attributes, setAttributes] = useState(null);
  const [seen, setSeen] = useState([]);
  const [currentImg, setCurrentImg] = useState(null);

  // Handle API Data on discover click
  const handleClick = () => {
    makeQuery();
  };

  //Query set up to call API
  const makeQuery = () => {
    let query = `${BASE_URL}${VITE_API_KEY}/random.php`;
    callAPI(query).catch(console.error);
  };

  //Call API
  const callAPI = async (query) => {
    const response = await fetch(query);
    const json = await response.json();
    if (json.drinks == null) {
      alert("Oops! Something went wrong with that query, let's try again!");
    } else {
      console.log(json.drinks[0].strDrinkThumb);
      setCurrentImg(json.drinks[0].strDrinkThumb);
      setAttributes({
        strDrink: json.drinks[0].strDrink,
        strCategory: json.drinks[0].strCategory,
        strGlass: json.drinks[0].strGlass,
        strIngredient1: json.drinks[0].strIngredient1,
      });
      setSeen((seen) => [...seen, json.drinks[0]]);
    }
  };

  return (
    <div className="App">
      <div className="seenContainer">
        <h3>What have we seen so far?</h3>
        <div className="drinkImage">
          {seen && seen.length > 0 ? (
            seen.map((seenDesc, index) => (
              <div key={index}>
                <h4>{seenDesc.strDrink}</h4>
                <img
                  className="seenImgs"
                  src={seenDesc.strDrinkThumb}
                  alt="Undefined screenshot from seen"
                  width="100"
                />
              </div>
            ))
          ) : (
            <h3>We haven't seen any drinks yet!</h3>
          )}
        </div>
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
