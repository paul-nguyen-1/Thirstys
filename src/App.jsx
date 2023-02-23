import { useState } from "react";
import "./App.css";
import Shots from "./components/Shots";

function App() {
  const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/";
  const VITE_API_KEY = import.meta.env.VITE_API_KEY;
  const [attributes, setAttributes] = useState(null);
  const [currentImg, setCurrentImg] = useState(null);
  const [seen, setSeen] = useState([]);
  const [banList, setBanList] = useState([]);

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

  //Filter out attribute clicked and put it on ban list
  const banAttribute = (value) => {
    setBanList((banList) => [...banList, value]);
    console.log({ value });
  };

  // Remove attribute from ban list
  const removeAttribute = (value) => {
    setBanList((banList) => banList.filter((attribute) => attribute !== value));
  };

  return (
    <div className="App">
      <div className="seenContainer">
        <h3>What have we seen so far?</h3>
        <div style={{ marginTop: "10px" }}>
          {seen && seen.length > 0 ? (
            seen.map((seenDesc, index) => (
              <div key={index}>
                <h4>
                  {index + 1}) {seenDesc.strDrink}
                </h4>
                <img
                  className="seenImgs"
                  src={seenDesc.strDrinkThumb}
                  alt="Undefined screenshot from seen"
                  width="100"
                  style={{
                    margin: "10px",
                    border: "2px solid  background-color: rgba(0, 0, 0, 0.815)",
                    borderRadius: "15px",
                  }}
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
        banAttribute={banAttribute}
      />
      <div className="banContainer">
        <h3>Ban List</h3>
        <h4>Select an attribute in your listing to ban it</h4>
        {banList &&
          banList.length > 0 &&
          banList.map((banned, index) => (
            <div key={index}>
              <button
                onClick={() => removeAttribute(banned)}
                style={{ margin: "10px 0px" }}
              >
                {banned}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
