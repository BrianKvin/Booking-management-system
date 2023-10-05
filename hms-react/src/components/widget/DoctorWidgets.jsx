import useAuth from "../../hooks/useAuth";

const DoctorWidgets = () => {
  const { patients, physios, bookings, auth, services, treatments } = useAuth();

  const myBookings = bookings.filter(
    (booking) => booking.physio.user.id === auth.userId
  );

  const myTreatments = treatments.filter(
    (treatment) => treatment.physio.user.id === auth.userId
  );

  return (
    <>
      <div className="row g-3 my-1">
        <div className="col-md-4">
          <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
            <div>
              <div className="fs-2">{physios.length}</div>
              <div className="fs-5">Doctors</div>
            </div>
            <i className="bi bi-people-fill p-3 fs-1"></i>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
            <div>
              <div className="fs-2">{patients.length}</div>
              <div className="fs-5">Patients</div>
            </div>
            <i className="bi bi-people p-3 fs-1"></i>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
            <div>
              <div className="fs-2">{myBookings.length}</div>
              <div className="fs-5">Appointments</div>
            </div>
            <i className="bi bi-book p-3 fs-1"></i>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
            <div>
              <div className="fs-2">{services.length}</div>
              <div className="fs-5">Services</div>
            </div>
            <i className="bi bi-bezier p-3 fs-1"></i>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
            <div>
              <div className="fs-2">{myTreatments.length}</div>
              <div className="fs-5">Patients seen</div>
            </div>
            <i className="bi bi-h-circle p-3 fs-1"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorWidgets;
