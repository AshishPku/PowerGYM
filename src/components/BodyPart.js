import React from "react";

const BodyPart = ({ setSelect }) => {
  return (
    <div>
      <p className="btn" onClick={() => setSelect(0)}>
        Back
      </p>
      BodyParts
    </div>
  );
};

export default BodyPart;
