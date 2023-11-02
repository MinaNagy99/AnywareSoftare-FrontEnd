import React from "react";

export default function AnnItemComponent({ ann }) {
  let {  description, createdBy } = ann;
  let { profileImg ,userName,course} = createdBy;
  let {courseName} =course 
  return (
    <>
      <div className="row my-2 border border-2 rounded-3 p-1">
        <div className="col-md-4 col-12">
          <div className="row ">
            <div className="col-3   overflow-hidden  rounded-circle  ">
              <img className="w-100  imgProfile" src={profileImg} alt="" />
            </div>
            <div className="col-9 d-flex flex-column justify-content-center">
              <h6 className="text-main fw-semibold m-0">{userName}</h6>
              <p className="text-muted m-0">{courseName}</p>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-12">
          <p className="text-muted">{description}</p>
        </div>
      </div>
    </>
  );
}
