import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const time = {
  one: "8 - 9am",
  two: "9 - 10am",
  three: "10 - 11am",
  four: "11 - 12pm",
  five: "12 - 1pm",
  six: "2 - 3pm",
  seven: "3 - 4pm",
};

const DoctorBookings = () => {
  const { auth, bookings, setBookingId } = useAuth();
  const navigate = useNavigate();

  const myBookings = bookings.filter(
    (booking) => booking.physio.user.id === auth.userId
  );

  const reversedBookings = myBookings.reverse();

  return (
    <table className="table caption-top table-hover">
      <caption className="text-white fs-4">Appointments</caption>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Patient</th>
          <th scope="col">Service</th>
          <th scope="col">Date</th>
          <th scope="col">Time</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {reversedBookings.map((bookings) => (
          <tr
            key={bookings.id}
            onClick={() => {
              setBookingId(bookings.id);
              navigate(`/home/treatment/${bookings.patient.id}`);
            }}
          >
            <th scope="row">BK-{bookings.id}</th>
            <td>
              {bookings.patient.user.first_name}{" "}
              {bookings.patient.user.last_name}
            </td>
            <td>{bookings.service.service}</td>
            <td>{bookings.resrv_date}</td>
            <td>{time[`${bookings.resrv_time}`]}</td>
            <td
              style={{
                backgroundColor:
                  bookings.status === "booked" ? "aqua" : "green",
              }}
            >
              {bookings.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DoctorBookings;
