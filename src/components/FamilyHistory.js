import React from "react";

const FamilyHistory = ({ familyHistory }) => {
  return (
    <div>
      {familyHistory && familyHistory.length > 0 ? (
        <ul>
          {familyHistory.map((historyItem, index) => (
            <li key={index}>
              <strong>Condition:</strong> {historyItem.condition},{" "}
              <strong>Relation:</strong> {historyItem.relation}
            </li>
          ))}
        </ul>
      ) : (
        <p>No family history recorded.</p>
      )}
    </div>
  );
};

export default FamilyHistory;
