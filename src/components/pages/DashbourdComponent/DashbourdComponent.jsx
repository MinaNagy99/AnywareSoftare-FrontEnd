import React from "react";
import NavbarComponent from "./NavbarComponent/NavbarComponent.jsx";
import SideBarComponent from "./SideBarComponent/SideBarComponent.jsx";
import AnnouncementComponent from "../AnnouncementComponent/AnnouncementComponent.jsx";
import QuizComponent from "./QuizComponent/QuizComponent.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { languageActions } from "../../../Rudex/Store/Slices/LanguageSlice.js";

export default function DashbourdComponent() {
  const { changeLanguage } = languageActions;
  const { languageToConvert } = useSelector((state) => state.languageReducer);
  const { i18n, t } = useTranslation();

  let dispatch = useDispatch();
  let handleLang = () => {
    dispatch(changeLanguage())
  };

  return (
    <>
      <div className="container mt-2  ">
        <div className="row px-3 ">
      
          <div className="bg-white  position-relative p-3 rounded-4">
          <p onClick={handleLang} className="text-aqua handelLangBtn  cursor-pointer fw-bolder fs-5">
            {languageToConvert}
          </p>
            <div className="col-md-8 col-12">
              <h1 className="text-aqua">{t("EXAM TIME")}</h1>
              <p className="text-main fw-semibold">
               {t("prepare to exam")}
              </p>
              <p className="text-muted">
                {t("qoute")}
              </p>
              <button className="bg-aqua px-4 border-0 text-white w-100  rounded-3 fw-semibold  py-2 ">
                {t("View exam type")}
              </button>
            </div>
          </div>
        </div>
        <div className="row  ">
          <div className="col-md-9   ps-0 col-12   ">
            <AnnouncementComponent />
          </div>
          <div className="col-md-3 pe-3 mt-3 pe-0 col-12 ">
            <div className="bg-white p-3 rounded-4">
              <QuizComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
