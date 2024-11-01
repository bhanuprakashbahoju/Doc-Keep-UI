const BASE_URL = "http://localhost:8080";

export const fetchPatientData = async (patientId) => {
  const response = await fetch(`${BASE_URL}/patient?id=${patientId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch patient data");
  }
  console.log(response);
  return response.json();
};
