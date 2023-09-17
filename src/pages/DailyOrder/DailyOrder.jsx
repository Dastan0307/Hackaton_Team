import React, { useState } from "react";
import "./DailyOrder.scss";
import { Link } from "react-router-dom";
import DailyOrder1 from "./DailyOrder1";
import DailyOrder2 from "./DailyOrder2";

const DailyOrder = () => {
  const [test, setState] = useState(true);
  const raspisanie = () => {
    setState(true);
  };
  const tartip = () => {
    setState(false);
  };
  return (
    <>
      <div className="daily">
        <div className="daily__first">
          <Link onClick={raspisanie} className="custom-link">
            Сабактардын жүгүртмөсү
          </Link>
        </div>
        <div className="daily__second">
          <Link onClick={tartip} className="custom-link">
            Күнүмдук сабак темалары
          </Link>
        </div>
      </div>
      {test ? <DailyOrder1 /> : <DailyOrder2 />}
    </>
  );
};

export default DailyOrder;
