import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Banner from "./components/Banner";
import Home from "./components/Home";
import ParitcularEquipments from "./components/ParitcularEquipments";
import BodyPart from "./components/BodyPart";
import ParticularBodyPart from "./components/ParticularBodyPart";
const headerOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "1b4c93a71emsh8d8b002c4f20395p1512c8jsnf016ad606133",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};
const App = () => {
  const [select, setSelect] = useState(0);
  // const [bodyPart, setbodyPart] = useState([]);
  // const [options, setoptions] = useState([]);
  // useEffect(function () {
  //   const fetchOptions = async () => {
  //     try {
  //       1) BodyPart
  //       const res = await fetch(
  //         "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  //         headerOptions
  //       );
  //       2) by equipmentsBodyPartTarget Body Part
  //       const res = await fetch(
  //         "https://exercisedb.p.rapidapi.com/exercises/equipmentList",
  //         headerOptions
  //       );
  //       3) Target Body Part
  //       const res = await fetch(
  //         "https://exercisedb.p.rapidapi.com/exercises/targetList",
  //         headerOptions
  //       );
  //       const data = await res.json();
  //       setoptions(data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   fetchOptions();
  // }, []);
  // useEffect(
  //   function () {
  //     const fetchExercise = async () => {
  //       try {
  //         1)
  //         const res = await fetch(
  //           `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${query}?limit=60&offset=0`,
  //           headerOptions
  //         );
  //         2)
  //         const res = await fetch(
  //           `https://exercisedb.p.rapidapi.com/exercises/equipment/${query}?limit=60&offset=0`,
  //           headerOptions
  //         );
  //         3)
  //         const res = await fetch(
  //           `https://exercisedb.p.rapidapi.com/exercises/target/${query}?limit=1000&offset=0`,
  //           headerOptions
  //         );
  //         const data = await res.json();
  //         setbodyPart(data);
  //       } catch (err) {
  //         console.error(err);
  //       }
  //     };
  //     fetchExercise();
  //   },
  //   [query]
  // );
  return (
    <div>
      {/* <Header query={query} setquery={setquery} options={options} />
      <Body bodyPart={bodyPart} /> */}
      <Header />
      {select === 0 && <Banner />}
      {select === 0 ? (
        <Home setSelect={setSelect} />
      ) : select === 1 ? (
        <ParitcularEquipments setSelect={setSelect} />
      ) : select === 2 ? (
        <BodyPart setSelect={setSelect} />
      ) : (
        <ParticularBodyPart setSelect={setSelect} />
      )}
    </div>
  );
};

export default App;
