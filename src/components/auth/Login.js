import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import logo from "../../assets/images/Logo.jpg";
import { fetchPatientData } from "../../services/GetPatient";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [patientId, setPatientId] = useState("");
  const [patientData, setPatientData] = useState(null);

  const history = useNavigate();
  const handleInputChange = (event) => {
    setPatientId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const patientData = await fetchPatientData(patientId);
      console.log("Patient Data:", patientData);
      setPatientData(patientData);
      history("/patient-details", { state: { patientData } });
    } catch (error) {
      console.error("Error fetching patient data:", error.message);
    }
  };

  return (
    <Container fluid className="vh-100 d-flex align-items-center">
      <Row className="justify-content-center w-100">
        <Col xs={12} sm={6} md={4} lg={3} className="text-center mb-4 mb-md-0">
          <img src={logo} alt="Logo" className="img-fluid" />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <div className="login-form">
            <h2 className="text-center mb-4">Login</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Patient ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter patient ID"
                  value={patientId}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
