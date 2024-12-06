import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AdminContext = createContext();

export const AdminContextProvider = (props) => {
  const [AToken, SetAToken] = useState(
    localStorage.getItem("aToken") ? localStorage.getItem("aToken") : ""
  );
  const [AllDocters, SetAllDocters] = useState([]);
  const backendUrl = "http://localhost:5000/";
  // import.meta.env.backendUrl
  const GetAllDoctersData = async () => {
    try {
      const { data } = await axios.post(
        backendUrl + "api/admin/all-doctors",
        {},
        { headers: { AToken } }
      );
      if (data.success) {
        SetAllDocters(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  const changeAvailability = async (docId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "api/admin/change-availability",
        { docId },
        { headers: { AToken } }
      );
      if (data.success) {
        toast.success(data.message);
        GetAllDoctersData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const value = {
    AToken,
    SetAToken,
    backendUrl,
    GetAllDoctersData,
    AllDocters,
    changeAvailability,
  };
  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};
