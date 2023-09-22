import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Sidebar from "../../components/layout/Sidebar";
import HomeNav from "../../components/layout/HomeNav";
import { Outlet } from "react-router-dom";
import { useState } from "react";

// const containerStyle = {
//   margin: "0",
// };

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container-fluid bg-secondary min-vh-100">
      <div className="row">
        {toggle && (
          <div className="col-2 bg-white vh-100 ">
            {/* position-fixed */}
            <Sidebar />
          </div>
        )}

        {/* {toggle && <div className="col-2"></div>} */}

        <div className="col">
          <HomeNav Toggle={Toggle} />
          <div className="container-fluid">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
