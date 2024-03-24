import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../feature/userDetailSlice";
import CustomModal from "./CustomModal";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUser());
  }, []);
  
  const { users, laoding } = useSelector((state) => state.app);
  console.log(users.Agehay);

  const [id, setId] = useState();
  console.log(id);

  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && (
        <CustomModal
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}

      <div className="w-100  d-flex justify-content-around flex-lg-wrap gap-4">
        {users &&
          users.map((data) => (
            <div key={data && data.id} className="card w-25">
              <div className="view overlay">
                <img
                  className="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Others/photo9.webp"
                />
              </div>
              <div className="card-body">
                <h4 className="card-title"> {data && data.name}</h4>
                <h5>{data && data.gender}</h5>
                <h5>{data && data.Agehay}</h5>
                <hr />
                <p className="card-text">{data && data.email}</p>
                <div className="d-flex justify-content-start gap-2">
                  <button onClick={()=> dispatch(deleteUser(data.id))} className="text-danger">Delete</button>
                  <Link to={`/edit/${data.id}`}>
                  <div className="text`-primary">update</div>
                  </Link>
                 
                  <button
                    onClick={() => [setId(data.id), setShowPopup(true)]}
                    className="text-secondary"
                  >
                    view
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default Read;
