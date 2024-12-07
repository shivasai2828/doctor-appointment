import React, { useContext } from "react";
import "./MyAppointment.css";
import { doctors } from "./../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const MyAppointment = () => {
  const { appointmentList } = useContext(StoreContext);
  if (appointmentList.length > 0) {
    appointmentList.map((each) => {
      console.log(each.doctordetails);
    });
  }
  return (
    <div className="my-appoinemtns-main-box">
      <p className="appointment-page-heading">My appointments</p>
      <hr />
      {appointmentList.length > 0 ? (
        <div>
          {appointmentList.map((item, index) => {
            // const { line1, line2 } = item.address;
            console.log(item.image);
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
                    {/* <p>{line1}</p> */}
                    {/* <p>{line2}</p> */}
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
      ) : (
        <div>
          <h1>no one here</h1>{" "}
        </div>
      )}
    </div>
  );
};

export default MyAppointment;
