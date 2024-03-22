import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../feature/userDetailSlice";

const Read = () => {
  const { users, laoding } = useSelector((state) => state.app);
  console.log(users, laoding);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showUser());
  }, []);

  return (
    <>
        <div className=" w-100  d-flex justify-content-around flex-lg-wrap gap-4">

      {users.map((data) => (
          <div key={data.id} className="card w-25">
            <div className="view overlay">
              <img
                className="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Others/photo9.webp"
              />
              <p>
                <div className="mask rgba-white-slight" />
              </p>
            </div>
           
            <div className="card-body">
              <h4 className="card-title">{data.name}</h4>
              <hr />
              <p className="card-text">
               {
                data.email
               }
              </p>
              <div className="d-flex justify-content-start gap-2">
             <div className="text-danger">Delete</div>
             <div className="text-primary">update</div>
             <div className="text-secondary">view</div>
             </div>
            </div>
          </div>
      
      ))}
          </div>

    </>

  );
};
export default Read;
