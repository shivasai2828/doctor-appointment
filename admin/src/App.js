import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import AllDoctor from "./pages/AllDoctor/AllDoctor";
import AddDoctor from "./pages/AddDoctor/AddDoctor";
import Navbar from "./components/Navbar/Navbar";
import Appointments from "./pages/Appointments/Appointments";
import Login from "./pages/Login/Login";
import { AdminContext } from "./context/AdminContext";

function App() {
  const [login, SetLogin] = useState(false);
  const { AToken } = useContext(AdminContext);
  console.log(AToken);

  return AToken ? (
    <>
      <div>
        <Navbar />
        <div className="panel-bg">
          <Sidebar />
          {/* <hr /> */}
          <div>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/appointments" element={<Appointments />} />

              <Route exact path="/all-doctors" element={<AllDoctor />} />
              <Route exact path="/add-doctor" element={<AddDoctor />} />
            </Routes>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
}

export default App;
