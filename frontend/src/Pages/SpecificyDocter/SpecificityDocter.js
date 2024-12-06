import React, { useState, useEffect } from "react";
import "./SpecificityDocter.css";
import { useNavigate, useParams } from "react-router-dom";
import { doctors } from "../../assets/assets";
import { assets } from "./../../assets/assets";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const SpecificityDocter = () => {
  const [docSlots, SetDocSlots] = useState([]);
  const [slotIndex, SetSlotIndex] = useState(0);
  const [slotTime, SetSlotTime] = useState("");

  const daysOfList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const { specificity } = useParams();
  const navigetor = useNavigate();
  const doctor = doctors.find((doc) => doc._id === specificity);
  const relatedDocters = doctors.filter(
    (doc) => doc.speciality === doctor.speciality
  );
  const getAvailableSlots = async () => {
    SetDocSlots([]);
    // getting current date
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      //getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      // console.log(currentDate, "dateobj");

      //getting end time of the dtae with index

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      //setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }
      let timeSlots = [];
      while (currentDate < endTime) {
        let formatedTime = currentDate.toLocaleString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        //add slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formatedTime,
        });
        //increment time by 30 mint
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      SetDocSlots((prev) => [...prev, timeSlots]);
    }
  };
  useEffect(() => {
    getAvailableSlots();
  }, [doctor]);
  useEffect(() => {
    // getAvailableSlots()
  }, [docSlots]);
  const token = Cookies.get("token");
  const handleApplication = () => {
    if (!token) {
      toast.error("Please login to book an appointment");
      navigetor("/signup");
    } else {
      toast.success("your slot is confirmed");
      console.log([slotIndex, slotTime]);
    }
  };
  return (
    <div className="specific-dr-main-page">
      <div className="specific-dr-details-container">
        <img className="docter-img" src={doctor.image} alt="img-docter" />
        <div className="specific-dr-details-content">
          <p className="specific-docter-name">
            {doctor.name} <img src={assets.verified_icon} alt="verified_icon" />
          </p>
          <div className="specific-text-rows">
            <p>
              {doctor.degree} - {doctor.speciality}
            </p>
            <button className="specific-dr-experiance">
              {doctor.experience}
            </button>
          </div>
          <p className="about-header">
            About <img src={assets.info_icon} alt="info-icons" />
          </p>
          <p className="dr-about">{doctor.about}</p>
          <p className="dr-expriance-p">
            Appointment Fee -{" "}
            <span className="span-experiance">${doctor.fees}</span>
          </p>
        </div>
      </div>
      {/* second section */}
      <div className="specific-dr-section-2">
        <p className="booking-slots-heading">Booking Slots</p>
        <div className="booking-date-day-container">
          {docSlots.length &&
            docSlots.map((item, index) => (
              <div
                onClick={() => SetSlotIndex(index)}
                className={
                  slotIndex === index
                    ? "each-date-date-container active-day"
                    : "each-date-date-container"
                }
                key={index}
              >
                <p> {item[0] && daysOfList[item[0].datetime.getDay()]} </p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))}
        </div>
        <div className="slot-time-container">
          {docSlots.length &&
            docSlots[slotIndex].map((item, index) => (
              <p
                onClick={() => SetSlotTime(item.time)}
                className={
                  slotTime === item.time ? "time-slot active-time" : "time-slot"
                }
                key={index}
              >
                {item.time.toLowerCase()}
              </p>
            ))}
        </div>
        <button onClick={handleApplication} className="appoinement-btn">
          Book Appointment
        </button>
      </div>

      <div className="specific-section-third">
        <h2 className="related-dr-heading">Related Doctors</h2>
        <p className="related-dr-p">
          Simply browse through our extensive list of trusted doctors.
        </p>
        <div className="related-docters-list">
          {relatedDocters.map((item, index) => (
            <div
              onClick={() => navigetor(`/appointment/${item._id}`)}
              key={index}
              className="each-doctor-specific"
            >
              <img
                className="doctor-img-specific-related"
                src={item.image}
                alt={item.name}
              />

              <div className="doctor-info-specific">
                <p className="doctor-available-home">
                  <span className="dot-span">&#9679; </span> Available
                </p>
                <p className="doctor-name-home">{item.name}</p>
                <p className="doctor-speciality-home">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecificityDocter;
