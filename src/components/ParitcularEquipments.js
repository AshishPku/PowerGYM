import React, { useEffect, useState } from "react";
import SelectOptions from "./SelectOptions";
import Body from "./Body";
const headerOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "4ddac8419emsh1cbe17b590ba477p13e99bjsnd08cfd40a688a",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};
const ParitcularEquipments = ({ setSelect }) => {
  const [options, setoptions] = useState([]);
  const [query, setquery] = useState("assisted");
  const [bodyPart, setbodyPart] = useState([]);
  useEffect(function () {
    const fetchOptions = async () => {
      try {
        const res = await fetch(
          "https://exercisedb.p.rapidapi.com/exercises/equipmentList",
          headerOptions
        );
        const data = await res.json();
        setoptions(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchOptions();
  }, []);
  useEffect(
    function () {
      const fetchData = async () => {
        try {
          const res = await fetch(
            `https://exercisedb.p.rapidapi.com/exercises/equipment/${query}?limit=100&offset=0`,
            headerOptions
          );
          const data = await res.json();
          setbodyPart(data);
        } catch (err) {
          console.error(err);
        }
      };
      fetchData();
    },
    [query]
  );
  return (
    <div>
      <div className="back-and-options">
        <p className="btn" onClick={() => setSelect(0)}>
          Back
        </p>
        <SelectOptions setquery={setquery} options={options} />
      </div>
      <Body bodyPart={bodyPart} />
    </div>
  );
};

export default ParitcularEquipments;
