import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../feature/userDetailSlice";

const Update = () => {
  const naviagte = useNavigate()
  const { id } = useParams();
  console.log("paramsid", id);

  const dispatch = useDispatch()

  const [updateData, setupdateData] = useState();
  console.log(updateData);
  const { users, loading } = useSelector((state) => {
    return state.app;
  });

  const newData = (e) => {
   setupdateData({...updateData , [e.target.name]:[e.target.value]})
  };

  useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele.id === id);
      setupdateData(singleUser[0]);
    }
  }, []);

  const handleUpdate = (e) =>{
    e.preventDefault();
    dispatch(updateUser(updateData));
    naviagte("/read")

    }

  return (
    <>
      <form onSubmit={handleUpdate} className="w-50 mx-auto mt-2">
        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            name="name"
            value={updateData && updateData.name}
            id="form3Example1"
            className="form-control border border-dark"
            placeholder="Enter your Name"
            onChange={newData}
          />
          {/* <label className="form-label">Enter Name</label> */}
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="email"
            name="email"
            value={updateData && updateData.email}
            id="form3Example3"
            className="form-control border border-dark"
            placeholder="Enter your Email"
            onChange={newData}
          />
          {/* <label className="form-label">Email address</label> */}
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            name="Agehay"
            value={updateData && updateData.Agehay}
            id="form3Example4"
            className="form-control border border-dark"
            onChange={newData}
            // placeholder="Age"
          />
          {/* <label className="form-label">Age</label> */}
        </div>

        <div className="form-check d-flex justify-content-start mb-4 ">
          <input
            className="form-check-input me-2"
            name="gender"
            value="male"
            type="checkbox"
            id="form2Example23"
            checked={updateData && updateData.gender === "male"}
            onChange={newData}
          />
          <label className="form-check-label ">Male</label>
        </div>
        <div className="form-check d-flex justify-content-start  mb-4">
          <input
            className="form-check-input me-2"
            name="gender"
            value="female"
            type="checkbox"
            id="form2Example33"
            checked={updateData && updateData.gender === "female"}
            onChange={newData}
          />
          <label className="form-check-label">feMale</label>
        </div>
        <button type="submit" className="btn btn-dark btn-block mb-4">
          Submit
        </button>
      </form>
    </>
  );
};

export default Update;
