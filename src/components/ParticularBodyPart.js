import React from "react";

const ParticularBodyPart = ({ setSelect }) => {
  return (
    <div>
      <p className="btn" onClick={() => setSelect(0)}>
        Back
      </p>
      ParticularBodyPart
    </div>
  );
};

export default ParticularBodyPart;
