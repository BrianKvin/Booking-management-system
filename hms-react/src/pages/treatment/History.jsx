import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";

const History = () => {
  const { treatments } = useAuth();
  const { patientId } = useParams();

  const [patient, setPatient] = useState(null);

  const myTreatments = treatments.filter(
    (treatment) => treatment.patient_id === parseInt(patientId)
  );

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/api/patient/${patientId}`
        );

        setPatient(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPatient();
  }, [patientId]);

  return (
    <table className="table caption-top table-hover">
      <caption className="text-white fs-4">{`${patient?.user?.first_name} ${patient?.user?.last_name}'s treatment history`}</caption>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Treatment</th>
          <th scope="col">Prescription</th>
          <th scope="col">Treated by</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        {myTreatments.map((treatment) => (
          <tr key={treatment.id}>
            <th scope="row">{treatment.id}</th>
            <td>{treatment.treatment}</td>
            <td>{treatment.prescription}</td>
            <td>
              {treatment.physio.user.first_name}{" "}
              {treatment.physio.user.last_name}
            </td>
            <td>{treatment.treatment_date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default History;
