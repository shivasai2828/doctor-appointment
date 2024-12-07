import React, { useState } from "react";
import "./Myprofile.css";
import { assets } from "../../assets/assets";
const Myprofile = () => {
  const [userData, SetUserData] = useState({
    name: "dummy name",
    age: 30,
    email: "boddushivasai@gmail.com",
    address: "123 Main St, Anytown, USA",
    phone: "8500548260",
    Gender: "Male",
    Birthday: "28/12.2002",
  });
  const [isEdit, SetIsEdit] = useState(false);
  const handleInputs = (event) => {
    const { name, value } = event.target;
    SetUserData({ ...userData, [name]: value });
  };
  return (
    <div className="my-profile-main-div">
      <div>
        <img src={assets.profile_pic} alt="Profile Image" />
        {isEdit ? (
          <input
            name="name"
            value={userData.name}
            onChange={handleInputs}
            placeholder="Name"
            type="text"
            className="my-profile-input-fields"
          />
        ) : (
          <p className="user-name-my-profile">{userData.name}</p>
        )}
        <hr />
        <p className="my-profile-form-header">Contact Information</p>
        <div className="my-profile-grid-div">
          <p>Email Id: </p>
          {isEdit ? (
            <input
              name="email"
              value={userData.email}
              onChange={handleInputs}
              type="email"
              className="my-profile-input-fields"
            />
          ) : (
            <p>{userData.email}</p>
          )}
          <p>Phone:</p>
          {isEdit ? (
            <input
              name="phone"
              value={userData.phone}
              onChange={handleInputs}
              type="number"
              className="my-profile-input-fields"
            />
          ) : (
            <p>{userData.phone}</p>
          )}
          <p>Address:</p>
          {isEdit ? (
            <input
              name="address"
              value={userData.address}
              onChange={handleInputs}
              type="text"
              className="my-profile-input-fields"
            />
          ) : (
            <p>{userData.address}</p>
          )}
        </div>
        <p className="my-profile-form-header">BASIC INFORMATION</p>
        <div className="my-profile-grid-div">
          <p>Gender</p>
          {isEdit ? (
            <select
              name="Gender"
              onChange={handleInputs}
              className="my-profile-input-fields"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          ) : (
            <p>{userData.Gender}</p>
          )}
          <p>Birthday:</p>
          {isEdit ? (
            <input
              name="Birthday"
              value={userData.Birthday}
              onChange={handleInputs}
              type="date"
              className="my-profile-input-fields"
            />
          ) : (
            <p>{userData.Birthday}</p>
          )}
        </div>
      </div>
      <div className="my-profile-buttons-div">
        <button
          className="btn-profiles-page"
          onClick={() => SetIsEdit(!isEdit)}
        >
          {isEdit ? <p> Save information</p> : <p>Edit</p>}
        </button>
        {/* <button className="btn-profiles-page" onClick={() => SetIsEdit(true)}>
          Save information
        </button> */}
      </div>
    </div>
  );
};

export default Myprofile;
