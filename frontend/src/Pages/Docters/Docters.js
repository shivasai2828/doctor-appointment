import React, { useState, useEffect } from "react";
import "./Docters.css";
import { assets, doctors } from "./../../assets/assets";
import { useNavigate, useParams } from "react-router-dom";
console.log(doctors);
const Docters = () => {
  const [filtersData, SetFiltersData] = useState([]);
  const navigator = useNavigate();

  const { speciality } = useParams();

  const ApplyFilters = () => {
    if (speciality) {
      const filtersData = doctors.filter(
        (each) => each.speciality === speciality
      );
      SetFiltersData(filtersData);
    } else {
      SetFiltersData(doctors);
    }
  };
  useEffect(() => {
    ApplyFilters();
  }, [speciality, doctors]);

  return (
    <div className="docters-main-bg">
      <p>Browse through the doctors specialist.</p>
      <div className="docters-row-container">
        <div>
          <p
            onClick={() =>
              speciality === "General physician"
                ? navigator("/docters")
                : navigator("/docters/General physician")
            }
            className={`all-docters-options-p ${
              speciality === "General physician" ? "bg-active" : ""
            }`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigator("/docters")
                : navigator("/docters/Gynecologist")
            }
            className={`all-docters-options-p ${
              speciality === "Gynecologist" ? "bg-active" : ""
            }`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigator("/docters")
                : navigator("/docters/Dermatologist")
            }
            className={`all-docters-options-p ${
              speciality === "Dermatologist" ? "bg-active" : ""
            }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigator("/docters")
                : navigator("/docters/Pediatricians")
            }
            className={`all-docters-options-p ${
              speciality === "Pediatricians" ? "bg-active" : ""
            }`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigator("/docters")
                : navigator("/docters/Neurologist")
            }
            className={`all-docters-options-p ${
              speciality === "Neurologist" ? "bg-active" : ""
            }`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigator("/docters")
                : navigator("/docters/Gastroenterologist")
            }
            className={`all-docters-options-p ${
              speciality === "Gastroenterologist" ? "bg-active" : ""
            }`}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="all-docters-con">
          {filtersData.map((item, index) => {
            return (
              <div
                onClick={() => navigator(`/appointment/${item._id}`)}
                key={index}
                className="each-doctor-home"
              >
                <div className="docter-img-bg">
                  <img
                    className="doctor-img-home"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className="doctor-info-home">
                  <p className="doctor-available-home">
                    <span className="dot-span">&#9679; </span> Available
                  </p>
                  <p className="doctor-name-home">{item.name}</p>
                  <p className="doctor-speciality-home">{item.speciality}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Docters;
