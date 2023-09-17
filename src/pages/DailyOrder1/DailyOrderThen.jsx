import React, { useState } from "react";
import "./DailyOrder.scss";
import { Link } from "react-router-dom";
import DailyOrderThen1 from "./DailyOrderThen1";
import DailyOrderThen2 from "./DailyOrderThen2";

const DailyOrderThen = () => {
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
      {test ? <DailyOrderThen1 /> : <DailyOrderThen2 />}
    </>
  );
};

export default DailyOrderThen;
