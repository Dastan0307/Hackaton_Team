import React, { useState } from "react";
import "./LessonGrid.scss";
import { Link } from "react-router-dom";
import LessonGrid1 from "./LessonGrid1";
import LessonGrid2 from "./LessonGrid2";

const LessonGrid = () => {
  const [test, setState] = useState(true);
  const raspisanie = () => {
    setState(true);
  };
  const tartip = () => {
    setState(false);
  };

  return (
    <>
      <div className="lesson">
        <div className="lesson__first">
          <Link onClick={raspisanie} className="custom-link">
            Расписание
          </Link>
        </div>
        <div className="lesson__second">
          <Link onClick={tartip} className="custom-link">
            Күн тартиби
          </Link>
        </div>
      </div>
      {test ? <LessonGrid1 /> : <LessonGrid2 />}
    </>
  );
};

export default LessonGrid;
