import React from "react";

function Shots({ attributes, currentImg, handleClick, banAttribute, banList }) {
  return (
    <div className="discoverContainer">
      <h1>Shots! Shots! Shots!</h1>
      <h2>Discover the best drinks from your wildest dreams.</h2>
      <p>🍺🍻🍷🍸🍹🥂🥃🍶🍾</p>
      {attributes && <h2>Specialty Drink: {attributes.strDrink}</h2>}
      <div className="attributeContainer">
        {attributes &&
          Object.entries(attributes).map(([attribute, value], index) => (
            <div className="attributeButton" key={index}>
              <button onClick={() => banAttribute(value)}>{value}</button>
            </div>
          ))}
      </div>
      {currentImg && (
        <img
          className="drinkImage"
          src={currentImg}
          alt="Image of a Drink"
          style={{
            margin: "10px",
            border: "2px solid  background-color: rgba(0, 0, 0, 0.815)",
            borderRadius: "15px",
          }}
        />
      )}
      <button
        onClick={handleClick}
        style={{ marginBottom: "50px", marginTop: "10px" }}
      >
        Discover! 🔀
      </button>
    </div>
  );
}

export default Shots;
