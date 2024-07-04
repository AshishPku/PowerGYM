import React from "react";
import hero from "./herogym.jpg";
import logo from "./logo.png";
const Home = ({ setSelect }) => {
  return (
    <div>
      <section className="main">
        <div className="container">
          <p onClick={() => setSelect(1)}>Search Exercises by Equipments</p>
        </div>
        <div className="container">
          <p onClick={() => setSelect(2)}>Search Exercises by BodyParts</p>
        </div>
        <div className="container">
          <p onClick={() => setSelect(3)}>
            Search Exercises by Target Body Part
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
