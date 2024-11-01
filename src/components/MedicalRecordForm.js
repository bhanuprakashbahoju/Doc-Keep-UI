import React, { useState } from "react";

const MedicalRecordForm = ({ patientId, onSubmit }) => {
  const [recordDate, setRecordDate] = useState("");
  const [type, setType] = useState("");
  const [details, setDetails] = useState("");
  const [doctorName, setDoctorName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newMedicalRecord = {
      recordDate,
      type,
      details,
      doctorName,
    };

    try {
      // Send POST request to API
      const response = await fetch(
        `http://localhost:8080/addMedicalRecord?id=${patientId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newMedicalRecord),
        }
      );

      // Check if the request was successful
      if (response.ok) {
        // Call onSubmit function with the newly added medical record
        onSubmit(newMedicalRecord);

        // Clear form fields after successful submission
        setRecordDate("");
        setType("");
        setDetails("");
        setDoctorName("");
      } else {
        // Handle error if request was not successful
        console.error("Failed to add medical record:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding medical record:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="recordDate" className="form-label">
          Record Date
        </label>
        <input
          type="date"
          className="form-control"
          id="recordDate"
          value={recordDate}
          onChange={(e) => setRecordDate(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="type" className="form-label">
          Type
        </label>
        <input
          type="text"
          className="form-control"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="details" className="form-label">
          Details
        </label>
        <input
          type="text"
          className="form-control"
          id="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="doctorName" className="form-label">
          Doctor Name
        </label>
        <input
          type="text"
          className="form-control"
          id="doctorName"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Medical Record
      </button>
    </form>
  );
};

export default MedicalRecordForm;
