import React from "react";
import { NavLink } from 'react-router-dom';
import './table.scss'

const Table = () => {
  return (
    <div className="table">
        <div className="table__link">
            <NavLink to={'/table'} >Катышуу табели</NavLink>
            <NavLink to={'/eat'} >Тамактануу</NavLink>
        </div>
        <p>Балдардын күнүмдүк бакчага катышуу баракчасы</p>
        <div className="table__kinder">
            <p>Сентябрь 2023ж. Ортонку тоб  </p>
            
        </div>
    </div>
  )
};

export default Table;
