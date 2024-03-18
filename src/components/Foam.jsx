import React from "react";

const Foam = () => {
  return (
    <form className="w-50 mx-auto mt-2">
  <div className="row mb-4">
    <div className="col">
      <div data-mdb-input-init className="form-outline">
        <input type="text" id="form3Example1" className="form-control border border-dark" />
        <label className="form-label" >First name</label>
      </div>
    </div>
    <div className="col">
      <div data-mdb-input-init className="form-outline">
        <input type="text" id="form3Example2" className="form-control border border-dark" />
        <label className="form-label" >Last name</label>
      </div>
    </div>
  </div>

  <div data-mdb-input-init className="form-outline mb-4">
    <input type="email" id="form3Example3" className="form-control border border-dark" />
    <label className="form-label" >Email address</label>
  </div>

  <div data-mdb-input-init className="form-outline mb-4">
    <input type="text" id="form3Example4" className="form-control border border-dark" />
    <label className="form-label" >Age</label>
  </div>

  <div className="form-check d-flex justify-content-start mb-4 ">
    <input className="form-check-input me-2 " type="checkbox" value="" id="form2Example33"  />
    <label className="form-check-label " >
      Male
    </label>
  </div>
  <div className="form-check d-flex justify-content-start  mb-4">
    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33"  />
    <label className="form-check-label" >
      Male
    </label>
  </div>
  <button data-mdb-ripple-init type="button" className="btn btn-dark btn-block mb-4">Submit</button>
</form>
  );
};

export default Foam;
