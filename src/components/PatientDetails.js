import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MedicalRecordForm from "./MedicalRecordForm";
import FamilyHistory from "./FamilyHistory";
import Allergies from "./Allergies";

const PatientRecords = () => {
  const [patientData, setPatientData] = useState({});
  const [showForm, setShowForm] = useState(false);
  const location = useLocation();

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };
  const onSubmit = (newMedicalRecord) => {
    setPatientData((prevData) => ({
      ...prevData,
      medicalRecords: [...(prevData.medicalRecords || []), newMedicalRecord],
    }));
  };
  useEffect(() => {
    if (location.state && location.state.patientData) {
      setPatientData(location.state.patientData);
    }
  }, [location.state]);

  const MedicalRecordDetails = ({ record }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
      setShowDetails(!showDetails);
    };

    return (
      <li className="list-group-item">
        {/* Record summary */}
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <strong>Record Date:</strong> {record.recordDate}
            <br />
            <strong>Type:</strong> {record.type}
            <br />
            <strong>Details:</strong> {record.details}
          </div>
          {/* Toggle button */}
          <button className="btn btn-sm btn-primary" onClick={toggleDetails}>
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
        </div>
        {/* Additional details */}
        {showDetails && (
          <div className="mt-3">
            <p>
              <strong>Doctor:</strong> {record.doctorName}
            </p>
            {/* Include additional fields here */}
            {record.symptoms && (
              <p>
                <strong>Symptoms:</strong> {record.symptoms.join(", ")}
              </p>
            )}
            {record.diagnosis && (
              <p>
                <strong>Diagnosis:</strong> {record.diagnosis.join(", ")}
              </p>
            )}
            {record.medications && (
              <p>
                <strong>Medications:</strong> {record.medications.join(", ")}
              </p>
            )}
          </div>
        )}
      </li>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 border-right">
          <h2 style={{ marginBottom: "15px" }}>Medical Records</h2>{" "}
          {/* Added margin-bottom */}
          <ul className="list-group">
            {patientData && patientData.medicalRecords ? (
              patientData.medicalRecords.map((record, index) => (
                <MedicalRecordDetails key={index} record={record} />
              ))
            ) : (
              <p>No medical records available.</p>
            )}
          </ul>
        </div>
        <div className="col-md-6">
          <div className="card p-3">
            <h2>Patient Information</h2>
            <p>
              <strong>Name:</strong> {patientData.name}
            </p>
            <p>
              <strong>Date of Birth:</strong> {patientData.dateOfBirth}
            </p>
            <p>
              <strong>Gender:</strong> {patientData.gender}
            </p>
            <p>
              <strong>Contact Info:</strong> {patientData.contactInfo}
            </p>
          </div>
          <button className="btn btn-primary mb-3" onClick={handleToggleForm}>
            Add Medical Record
          </button>
          {showForm && (
            <MedicalRecordForm patientId={patientData.id} onSubmit={onSubmit} />
          )}
          <div className="row">
            <div className="col-md-6">
              <h2>Family History</h2>
              <FamilyHistory familyHistory={patientData.familyHistory} />
            </div>
            <div className="col-md-6">
              <h2>Allergies</h2>
              <Allergies allergies={patientData.allergyRecords} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientRecords;
