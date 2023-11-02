import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../../../Rudex/Store/Slices/userSlice.js";
import { useTranslation } from "react-i18next";

export default function NavbarComponent() {
  let dispatch = useDispatch()
  let navigate =  useNavigate()
  let handelLogout = ()=>{
    localStorage.clear()
    navigate('/')
  }
  const { t } = useTranslation();

  let {user}= useSelector((state)=>state.userReducer)
  
  useEffect(() => {
    dispatch(getUserData())
  }, [])
  
  return (
    <>
      <nav className="navbar navbar-expand-lg  px-md-5 py-4  bg-white ">
        <div className="container">
          <a className="nav-link fw-bold fs-3 header1" href="#">
            {t("Welcome")} {user?.data?.userName}
          </a>
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse mt-md-0 mt-4"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex" role="search">
              <input
                className="form-control text-center px-5 rounded-5 me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <i className="bi bi-envelope-fill  mx-3 position-relative text-aqua fs-3">
              <span className="position-absolute top-0 start-100 translate-middle py-1 fs-6 px-2  badge rounded-pill bg-danger">
                5<span className="visually-hidden">unread messages</span>
              </span>
            </i>
            <i className="bi bi-bell-fill mx-3 position-relative text-aqua fs-3">
              <span className="position-absolute top-0 start-100 fs-6 translate-middle py-1 px-2  badge rounded-pill bg-danger">
                3<span className="visually-hidden">unread messages</span>
              </span>
            </i>
            <button onClick={handelLogout} className="mx-3 btn btn-aqua px-3">Logout</button>
          </div>
        </div>
      </nav>
    </>
  );
}
