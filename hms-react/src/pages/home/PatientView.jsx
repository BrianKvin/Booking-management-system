import { useNavigate } from "react-router-dom";
import PatientWidgets from "../../components/widget/PatientWidgets";
import PatientBookings from "../../components/tables/PatientBookings";
import ServicesTable from "../../components/tables/ServicesTable";

const PatientView = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="container-fluid">
        <PatientWidgets />
      </div>

      <div className="row px-3">
        <div className="col-9">
          <PatientBookings />
        </div>

        <div className="col-3">
          <ServicesTable />

          <div className="bg-white">
            <button
              onClick={() => navigate("/home/booking")}
              type="button"
              className="btn btn-info"
            >
              Make an Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientView;
