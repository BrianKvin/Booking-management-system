import { Link } from "react-router-dom";
import "./style.css";
import { doctorItems, patientItems } from "./SidebarItems";
import useAuth from "../../hooks/useAuth";

const Sidebar = () => {
  const { auth } = useAuth();
  const items = auth.role === "physio" ? doctorItems : patientItems;

  return (
    <div className="bg-white sidebar p-2">
      <div className="m-2">
        <i className="bi bi-hospital-fill me-2 fs-4"></i>
        <span className="brand-name fs-4">OneClinic</span>
      </div>

      <hr className="text-dark" />

      <div className="list-group list-group-flush">
        {items.map((item) => (
          <Link key={item.id} to={item.path} className="list-group-item py-2">
            <i className={`bi ${item.icon} fs-5 me-3`}></i>
            <span className="fs-5">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
