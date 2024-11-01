import React, { useState } from "react";

const AddPatientForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    dateOfBirth: "",
    gender: "",
    contactInfo: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/addPatient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Response:", data);
    } catch (error) {
      console.error("Error adding patient:", error.message);
    }
  };

  return (
    <div className="container">
      <h2>Add Patient</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            Id:
          </label>
          <input
            type="text"
            className="form-control"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dateOfBirth" className="form-label">
            Date of Birth:
          </label>
          <input
            type="date"
            className="form-control"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender:
          </label>
          <input
            type="text"
            className="form-control"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contactInfo" className="form-label">
            Contact Info:
          </label>
          <input
            type="text"
            className="form-control"
            id="contactInfo"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPatientForm;
