import React, { useContext, useEffect } from "react";
import "./AllDoctor.css";
import { AdminContext } from "../../context/AdminContext";

const AllDoctor = () => {
  const { AToken, GetAllDoctersData, AllDocters, changeAvailability } =
    useContext(AdminContext);
  useEffect(() => {
    if (AToken) {
      GetAllDoctersData();
      console.log(AllDocters);
    }
  }, [AToken]);
  console.log(AllDocters);
  return (
    <div className="all-doctors-bg">
      <p className="all-doctors-heading">All Doctors</p>
      <div className="all-doctors-cards">
        {AllDocters.map((item, index) => {
          return (
            <div key={index} className="doctor-card">
              <img
                className="docter-img-all-doctors"
                src={item.image}
                alt="Doctor"
              />
              <div className="docter-card-content">
                <p className="doctor-card-name">{item.name}</p>
                <p className="doctor-card-speciality">{item.speciality}</p>
                <div className="input-box-doctor-card">
                  <input
                    onChange={() => changeAvailability(item._id)}
                    type="checkbox"
                    checked={item.available}
                  />
                  <p>Available</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllDoctor;
