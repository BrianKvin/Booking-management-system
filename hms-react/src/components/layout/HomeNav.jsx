import "bootstrap/js/dist/dropdown";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeNav = ({ Toggle }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState({ first_name: "", last_name: "" });

  useEffect(() => {
    auth.role === "patient"
      ? setUser(auth.patient.user)
      : setUser(auth.physio.user);
  }, [auth]);

  if (!auth) return <div>Loading...</div>;

  return (
    <nav className="navbar navbar-expand-sm navbar-white bg-white px-3">
      <i className="navbar-brand bi bi-justify-left fs-4" onClick={Toggle}></i>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dr. {user.first_name} {user.last_name}
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <div className="dropdown-item" href="#">
                Profile
              </div>
              <div className="dropdown-item" href="#">
                Settings
              </div>
              <div className="dropdown-item" onClick={() => navigate("/")}>
                Logout
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HomeNav;
