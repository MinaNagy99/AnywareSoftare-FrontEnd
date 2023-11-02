import React, { useEffect } from "react";
import QuizItemComponent from "./QuizItemComponent/QuizItemComponent.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getQuizes } from "../../../../Rudex/Store/Slices/QuizSlice.js";
import LoadingComponent from "../LoadingComponent/LoadingComponent.jsx";
import { languageActions } from "../../../../Rudex/Store/Slices/LanguageSlice.js";
import { useTranslation } from "react-i18next";

export default function QuizComponent() {
  let dispatch = useDispatch();
  let { quizes, isLoading } = useSelector((state) => state.quizReducer);
  let { data } = quizes;
  useEffect(() => {
    dispatch(getQuizes());
  }, []);
  const { changeLanguage } = languageActions;
  const { languageToConvert } = useSelector((state) => state.languageReducer);
  const { t } = useTranslation();

  let handleLang = () => {
    dispatch(changeLanguage());
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <h4 className="fw-semibold text-main">{t("what's due")} </h4>
        <p
          onClick={handleLang}
          className="text-aqua  cursor-pointer fw-bolder fs-5"
        >
          {languageToConvert}
        </p>
      </div>
      <p className="text-muted">
        {" "}
        {t("Required tasks that must be performed")}.
      </p>
      {isLoading && <LoadingComponent />}
      {!isLoading &&
        data?.map((quiz) => {
          return <QuizItemComponent key={quiz._id} quiz={quiz} />;
        })}
    </>
  );
}
