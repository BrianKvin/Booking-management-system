import { useNavigate } from "react-router-dom";
import DoctorWidgets from "../../components/widget/DoctorWidgets";
import DoctorBookings from "../../components/tables/DoctorBookings";
import ServicesTable from "../../components/tables/ServicesTable";

const DoctorView = () => {
  const navigate = useNavigate();

  return (
    <div className="container ">
      <div className="container-fluid">
        <DoctorWidgets />
      </div>

      <div className="row px-2">
        <div className="col-9">
          <DoctorBookings />
        </div>

        <div className="col-3">
          <ServicesTable />

          <div className="bg-white">
            <button
              onClick={() => navigate("/home/services")}
              type="button"
              className="btn btn-info"
            >
              Add Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorView;
