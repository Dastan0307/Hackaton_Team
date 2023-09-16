import React, { useState } from "react";
import "./LessonGrid.scss";
import { Link } from "react-router-dom";
import LessonGrid1 from "./LessonGrid1";
import LessonGrid2 from "./LessonGrid2";

const LessonGrid = () => {
  const [test, setState] = useState(true);
  const [isRaspisanieActive, setIsRaspisanieActive] = useState(true);
  const [isTartipActive, setIsTartipActive] = useState(false);

  const raspisanie = () => {
    setIsRaspisanieActive(true);
    setIsTartipActive(false);
    setState(true);
  };
  const tartip = () => {
    setIsRaspisanieActive(false);
    setIsTartipActive(true);
    setState(false);
  };
  return (
    <div className="cont">
      <div className="lesson">
        <div className="lesson__first">
          <Link
            onClick={raspisanie}
            className={`custom-link ${isRaspisanieActive ? "active" : ""}`}
          >
            Расписание
          </Link>
        </div>
        <div className="lesson__second">
          <Link
            onClick={tartip}
            className={`custom-link ${isTartipActive ? "active" : ""}`}
          >
            Күн тартиби
          </Link>
        </div>
      </div>
      {test ? <LessonGrid1 /> : <LessonGrid2 />}
    </div>
  );
};

export default LessonGrid;
