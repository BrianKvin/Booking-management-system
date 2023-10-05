import useAuth from "../../hooks/useAuth";

const MyTreatment = () => {
  const { treatments, auth } = useAuth();

  const myTreatments = treatments.filter(
    (treatment) => treatment.patient_id === auth.patient.id
  );

  return (
    <table className="table caption-top table-hover">
      <caption className="text-white fs-4">Treatment History</caption>
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

export default MyTreatment;
