import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import HomePage from "./components/common/HomePage";
import PatientRecords from "./components/PatientDetails";
import AddPatientForm from "./components/Register";
function App() {
  return (
    <React.StrictMode>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/patient-details" element={<PatientRecords />} />
        <Route path="/register" element={<AddPatientForm />} />
        {/* <Route path="/patients" component={PatientPage} /> */}
        {/* <Route path="/doctors" component={DoctorPage} /> */}
      </Routes>
      <Footer />
    </React.StrictMode>
  );
}

export default App;
