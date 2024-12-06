import React, { useContext, useState } from "react";
import "./AddDoctor.css";
import { assets } from "./../../assets/assets";
import { toast } from "react-toastify";
import axios from "axios";
import { AdminContext } from "../../context/AdminContext";

const AddDoctor = () => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [speciality, SetSpeciality] = useState("General physician");
  const [degree, SetDegree] = useState("");
  const [contactNumber, SetContactNumber] = useState("");
  const [about, SetAbout] = useState("");
  const [fees, SetFees] = useState("");
  const [education, SetEducation] = useState("");
  const [address1, SetAddress1] = useState("");
  const [address2, SetAddress2] = useState("");
  const [docImg, SetDocImg] = useState(false);
  const [experiance, setExperiance] = useState("1 year");
  const { AToken, SetAToken } = useContext(AdminContext);
  // console.log(AToken);
  const addDocterClick = async (e) => {
    e.preventDefault();
    try {
      if (!docImg) {
        return toast.error("Image is Not Selected");
      }
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append("experience", experiance);
      formData.append("about", about);
      formData.append("fees", Number(fees));
      // formData.append("education", education);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );
      formData.append("image", docImg);
      formData.forEach((value, key) => {
        console.log(key, value);
      });
      // axios

      const { data } = await axios.post(
        "http://localhost:5000/api/admin/add-doctor",
        formData,
        { headers: { AToken } }
      );
      if (data.success) {
        toast.success("Doctor Added Successfully");
        SetName("");
        SetEmail("");
        SetPassword("");
        SetSpeciality("General physician");
        SetDegree("");
        SetContactNumber("");
        SetAbout("");
        SetFees("");
        SetEducation("");
        SetAddress1("");
        SetAddress2("");
        SetDocImg(false);
        setExperiance("1 year");
      } else {
        toast.error(data.message);
        console.log("error");
      }
      // console.log(data);
    } catch (error) {
      console.log(error);
      toast.error("Error Occured");
    }
  };
  return (
    <div className="add-doctor-bg">
      <p className="add-doctor-heading">Add Doctor</p>
      <div className="doctor-form-container">
        <form className="doctor-form" onSubmit={addDocterClick}>
          <div className="profile-picture">
            <label htmlFor="doctor-picture">
              <img
                className="add-doctor-img"
                src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
                alt="upload_area"
              />
            </label>
            <input
              onChange={(e) => SetDocImg(e.target.files[0])}
              type="file"
              id="doctor-picture"
            />
            <p className="label-uploade-img">
              Upload doctor
              <br /> picture
            </p>
          </div>

          <div className="form-group">
            <label>Doctor name</label>
            <input
              value={name}
              onChange={(e) => SetName(e.target.value)}
              type="text"
              placeholder="Name"
            />
          </div>

          <div className="form-group">
            <label>Speciality</label>
            <select
              value={speciality}
              onChange={(e) => SetSpeciality(e.target.value)}
            >
              <option value="General physician">General physician</option>
              <option value="Cardiologist">Cardiologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Pediatricians">Pediatricians</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Gastroenterologist">Gastroenterologist</option>
            </select>
          </div>
          <div className="form-group">
            <label>Doctor Email</label>
            <input
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
              type="email"
              placeholder="Your email"
            />
          </div>
          <div className="form-group">
            <label>Education</label>
            <input
              value={degree}
              onChange={(e) => SetDegree(e.target.value)}
              type="text"
              placeholder="Education"
            />
          </div>
          <div className="form-group">
            <label>Doctor Password</label>
            <input
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              onChange={(e) => SetAddress1(e.target.value)}
              value={address1}
              type="text"
              placeholder="Address 1"
            />
            <input
              onChange={(e) => SetAddress2(e.target.value)}
              value={address2}
              type="text"
              placeholder="Address 2"
            />
          </div>

          <div className="form-group">
            <label>Experience</label>
            <select
              value={experiance}
              onChange={(e) => setExperiance(e.target.value)}
            >
              <option value="1 years">1 years</option>
              <option value="2 years">2 years</option>
              <option value="3 years">3 years</option>
              <option value="4 years">4 years</option>
              <option value="5 years">5 years</option>
              <option value="10+ years">10+ years</option>
            </select>
          </div>

          <div className="form-group">
            <label>Fees</label>
            <input
              value={fees}
              onChange={(e) => SetFees(e.target.value)}
              type="text"
              placeholder="Your fees"
            />
          </div>

          <div className="form-group full-width">
            <label>About me</label>
            <textarea
              value={about}
              onChange={(e) => SetAbout(e.target.value)}
              placeholder="Write about yourself"
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Add doctor
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
