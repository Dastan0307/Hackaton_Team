import React from "react";
import "./DailyOrder.scss";
import { Link } from "react-router-dom";

const DailyOrder = () => {
  return (
    <>
      <div className="daily">
        <div className="daily__first">
          <Link to="/daily-order1" className="custom-link">
            Сабактардын жүгүртмөсү
          </Link>
        </div>
        <div className="daily__second">
          <Link to="/daily-order2" className="custom-link">
            Күнүмдук сабак темалары
          </Link>
        </div>
      </div>
    </>
  );
};

export default DailyOrder;
