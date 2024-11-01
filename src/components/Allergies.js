import React from "react";

const Allergies = ({ allergies }) => {
  return (
    <div>
      {allergies && allergies.length > 0 ? (
        <ul>
          {allergies.map((allergy, index) => (
            <li key={index}>
              <strong>Allergen:</strong> {allergy.allergen},{" "}
              <strong>Reaction:</strong> {allergy.reaction}
            </li>
          ))}
        </ul>
      ) : (
        <p>No allergies recorded.</p>
      )}
    </div>
  );
};

export default Allergies;
