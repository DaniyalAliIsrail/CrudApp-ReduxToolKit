import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../feature/userDetailSlice";
import { useNavigate } from "react-router-dom";
const Foam = () => {
  const [user, setUser] = useState({});
  // console.log(user);
  const getserData = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("user...>", user);
    dispatch(createUser(user));
    navigate("/read");
  };

  return (
    <form onSubmit={handleSubmit} className="w-50 mx-auto mt-2">
      <div className="row mb-4">
        <div className="col">
          <div data-mdb-input-init className="form-outline">
            <input
              onChange={getserData}
              type="text"
              name="name"
              id="form3Example1"
              className="form-control border border-dark"
            />
            <label className="form-label">First name</label>
          </div>
        </div>
        <div className="col">
          <div data-mdb-input-init className="form-outline">
            <input
              onChange={getserData}
              type="text"
              name="lastName"
              id="form3Example2"
              className="form-control border border-dark"
            />
            <label className="form-label">Last name</label>
          </div>
        </div>
      </div>

      <div data-mdb-input-init className="form-outline mb-4">
        <input
          onChange={getserData}
          type="email"
          name="email"
          id="form3Example3"
          className="form-control border border-dark"
        />
        <label className="form-label">Email address</label>
      </div>

      <div data-mdb-input-init className="form-outline mb-4">
        <input
          onChange={getserData}
          type="text"
          name="Age"
          id="form3Example4"
          className="form-control border border-dark"
        />
        <label className="form-label">Age</label>
      </div>

      <div className="form-check d-flex justify-content-start mb-4 ">
        <input
          onChange={getserData}
          className="form-check-input me-2"
          name="gender"
          value="male"
          type="checkbox"
          id="form2Example23"
        />
        <label className="form-check-label ">Male</label>
      </div>
      <div className="form-check d-flex justify-content-start  mb-4">
        <input
          onChange={getserData}
          className="form-check-input me-2"
          name="gender"
          value="female"
          type="checkbox"
          id="form2Example33"
        />
        <label className="form-check-label">feMale</label>
      </div>
      <button type="submit" className="btn btn-dark btn-block mb-4">
        Submit
      </button>
    </form>
  );
};

export default Foam;
