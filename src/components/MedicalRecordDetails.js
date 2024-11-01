import React, { useState } from "react";

const MedicalRecordDetails = ({ record }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li className="list-group-item">
      <div onClick={toggleDetails}>
        <strong>Record Date:</strong> {record.recordDate}
      </div>
      {showDetails && (
        <div>
          <p>
            <strong>Type:</strong> {record.type}
          </p>
          <p>
            <strong>Details:</strong> {record.details}
          </p>
          <p>
            <strong>Doctor:</strong> {record.doctor_name}
          </p>
          <p>
            <strong>Symptoms:</strong>{" "}
            {record.symptoms && record.symptoms.join(", ")}
          </p>
          <p>
            <strong>Diagnosis:</strong>{" "}
            {record.diagnosis && record.diagnosis.join(", ")}
          </p>
          <p>
            <strong>Medications:</strong>{" "}
            {record.medications && record.medications.join(", ")}
          </p>
        </div>
      )}
    </li>
  );
};

export default MedicalRecordDetails;
