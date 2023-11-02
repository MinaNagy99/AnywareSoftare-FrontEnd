import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css"
import { useTranslation } from "react-i18next";
export default function SideBarComponent() {
  const {  t } = useTranslation();
  return (
    <>
      <h1 className="mb-5">Coligo</h1>
      <NavLink
        to="/home/dashboard"
        className="d-flex justify-content-center handelHover  nav-link  fw-semibold align-items-center my-4 py-3   fs-6"
      >
        <i className="bi bi-house-door-fill text-white "></i>
        <p className=" m-1 ms-4 text-white">{t("Dashboard")} </p>
      </NavLink>
      <NavLink
        to="/home/schudle"
        className="d-flex justify-content-center  nav-link fw-semibold align-items-center my-4 py-3   fs-6"
      >
        <i className="bi bi-calendar3 text-white "></i>
        <p className=" m-1 ms-4 text-white">{t("Schudle")}</p>
      </NavLink>
      <NavLink to="/home/course" className="d-flex justify-content-center  nav-link fw-semibold align-items-center my-4 py-3   fs-6">
        <i className="bi bi-journal-text text-white "></i>
        <p className=" m-1 ms-4 text-white">{t("Courses")}</p>
      </NavLink>
      <NavLink to='/home/gradBook' className="d-flex justify-content-center handelHover nav-link fw-semibold align-items-center my-4 py-3   fs-6">
        <i className="bi bi-mortarboard-fill text-white "></i>
        <p className=" m-1 ms-4 text-white">{t("GradeBook")} </p>
      </NavLink>
      <NavLink to="/home/performance" className="d-flex justify-content-center  nav-link fw-semibold align-items-center my-4 py-3   fs-6">
        <i className="bi bi-graph-up-arrow text-white "></i>
        <p className=" m-1 ms-4 text-white">{t("Performance")}</p>
      </NavLink>
      <NavLink to="/home/announcement" className="d-flex justify-content-center  nav-link fw-semibold align-items-center my-4 py-3     fs-6">
        <i className="bi bi-megaphone-fill text-white "></i>
        <p className=" m-1 ms-4 text-white">{t("Announcements")}</p>
      </NavLink>
    </>
  );
}
