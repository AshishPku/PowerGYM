import React from "react";

const SelectOptions = ({ options, setquery }) => {
  return (
    <div className="select-options">
      <span>Choose options: </span>
      <select onChange={(e) => setquery(e.target.value)}>
        {options?.map((op) => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOptions;
