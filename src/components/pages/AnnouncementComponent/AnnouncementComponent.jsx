import React, { useEffect } from "react";
import AnnItemComponent from "./AnnouncementItem/AnnItemComponent.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getAnnouncement } from "../../../Rudex/Store/Slices/AnnouncementSlice.js";
import LoadingComponent from "../DashbourdComponent/LoadingComponent/LoadingComponent.jsx";
import { useTranslation } from "react-i18next";
import { languageActions } from "../../../Rudex/Store/Slices/LanguageSlice.js";

export default function AnnouncementComponent() {
  const { changeLanguage } = languageActions;
  const { languageToConvert } = useSelector((state) => state.languageReducer);
  const { i18n, t } = useTranslation();
  const { announcements, isLoading } = useSelector(
    (state) => state.announcementReducer
  );
  let dispatch = useDispatch();
  let handleLang = () => {
    dispatch(changeLanguage())
  };
  useEffect(() => {
    dispatch(getAnnouncement());
  }, []);

  return (
    <>
      <div className="bg-white mt-3 mx-3 p-3 rounded-4">
        <div className="d-flex justify-content-between  ">
          <div>
            <h4 className="text-main fw-semibold">{t("Announcements")}</h4>
            <p className="text-muted ">
              {t("View the latest published Announcements")}
            </p>
          </div>
          <p onClick={handleLang} className="text-aqua cursor-pointer fw-bolder fs-5">
            {languageToConvert}
          </p>
        </div>

        <div className="p-1">
          {isLoading && <LoadingComponent />}
          {!isLoading &&
            announcements?.data?.map((ann) => {
              return <AnnItemComponent key={ann._id} ann={ann} />;
            })}
        </div>
      </div>
    </>
  );
}
