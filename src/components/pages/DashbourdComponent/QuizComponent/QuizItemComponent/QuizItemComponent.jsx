import React from "react";

export default function QuizItemComponent({quiz}) {
  let {quizName,topic,quizDate,course} =quiz
  let {courseName} = course
  return (
    <>
      <div className="p-3 my-2 border rounded-4 border-2">
        <div className="">
          <div className="d-flex align-items-center ">
            <i className="bi bi-hourglass-split text-aqua fs-5 me-2"></i>
            <h6 className="fw-semibold text-main">{quizName}</h6>
          </div>
          <p className="text-muted">Course : {courseName} </p>
          <p className="text-muted">Topic : {topic} </p>
          <p className="text-muted">Date : {quizDate} </p>
          <button className=" btn-aqua  fw-semibold  w-100">Start Quiz</button>
        </div>
      </div>
    </>
  );
}
