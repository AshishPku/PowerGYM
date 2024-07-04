import React from "react";

const Body = ({ bodyPart }) => {
  return (
    <div className="exercise-container">
      {bodyPart?.map((exercise) => {
        return (
          <div className="exercise" key={exercise.id}>
            <img className="gif" src={exercise.gifUrl} alt="gif" />
            <p className="bodypart">BodyPart: {exercise.bodyPart}</p>
            <p className="equipment"> Equipments: {exercise.equipment}</p>
            <p>Name: {exercise.name}</p>
            <p>Target Muscle: {exercise.target}</p>
            <strong>Instructions:</strong>
            <ul>
              {exercise.instructions.map((inst) => (
                <li key={inst}>{inst}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Body;
