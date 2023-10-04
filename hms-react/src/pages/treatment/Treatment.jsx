import TreatmentForm from "../forms/treatmentForm/TreatmentForm";
import History from "./History";

const Treatment = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <History />
        </div>
        <div className="col-md-5">
          <TreatmentForm />
        </div>
      </div>
    </div>
  );
};

export default Treatment;
