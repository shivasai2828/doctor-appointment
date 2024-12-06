import React from "react";
import "./MyAppointment.css";
import { doctors } from "./../../assets/assets";

const MyAppointment = () => {
  return (
    <div className="my-appoinemtns-main-box">
      <p className="appointment-page-heading">My appointments</p>
      <hr />
      <div>
        {doctors.slice(0, 3).map((item, index) => {
          const { line1, line2 } = item.address;
          return (
            <div key={index}>
              <div className="my-appointment-div-each">
                <img
                  className="appointment-user-img"
                  src={item.image}
                  alt="img-user"
                />
                <div className="appointment-right">
                  <p>{item.name}</p>
                  <p>{item.speciality}</p>
                  <h6 className="address-appointments">Address</h6>
                  {/* <p>{item.address[0]}</p> */}
                  <p>{line1}</p>
                  <p>{line2}</p>
                </div>
                <div className="appointments-btn-div">
                  <button className="pay-btn">Cancel Appointment</button>
                  <button className="pay-btn one-btn-appointment">
                    Pay here
                  </button>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyAppointment;
