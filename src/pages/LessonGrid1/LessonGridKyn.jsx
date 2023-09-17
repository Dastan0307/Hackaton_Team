import React, { useState } from "react";
import "./LessonGrid.scss";
import { Link } from "react-router-dom";
import LessonGridKyn1 from "./LessonGridKyn1";
import LessonGridKyn2 from "./LessonGridKyn2";

const LessonGridKyn = () => {
  const [test, setState] = useState(false);
  const [isRaspisanieActive, setIsRaspisanieActive] = useState(false);
  const [isTartipActive, setIsTartipActive] = useState(true);

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
            Кун тартип
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
      {test ? <LessonGridKyn1 /> : <LessonGridKyn2 />}
    </div>
  );
};

export default LessonGridKyn;
