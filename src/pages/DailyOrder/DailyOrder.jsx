import React, { useState } from "react";
import "./DailyOrder.scss";
import { Link } from "react-router-dom";
import DailyOrder1 from "./DailyOrder1";
import DailyOrder2 from "./DailyOrder2";

const DailyOrder = () => {
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
    <>
      <div className="daily">
        <div className="daily__first">
          <Link
            onClick={raspisanie}
            className={`custom-link ${isRaspisanieActive ? "active" : ""}`}
          >
            Сабактардын жүгүртмөсү
          </Link>
        </div>
        <div className="daily__second">
          <Link
            onClick={tartip}
            className={`custom-link ${isTartipActive ? "active" : ""}`}
          >
            Күнүмдук сабак темалары
          </Link>
        </div>
      </div>
      {test ? <DailyOrder1 /> : <DailyOrder2 />}
    </>
  );
};

export default DailyOrder;
