import React from "react";

let tartip1 = [
  {
    id: 1,
    time1: "7:00-8:30",
    name: "Балдарды кабыл алуу",
  },
  {
    id: 2,
    time1: "8:30-8:50",
    name: "Подготовка к завтраку, завтрак",
  },
  {
    id: 3,
    time1: "7:00-8:30",
    name: "Балдарды кабыл алуу",
  },
  {
    id: 4,
    time1: "8:30-8:50",
    name: "Подготовка к завтраку, завтрак",
  },
  {
    id: 5,
    time1: "7:00-8:30",
    name: "Балдарды кабыл алуу",
  },
  {
    id: 6,
    time1: "8:30-8:50",
    name: "Подготовка к завтраку, завтрак",
  },
  {
    id: 7,
    time1: "7:00-8:30",
    name: "Балдарды кабыл алуу",
  },
  {
    id: 8,
    time1: "8:30-8:50",
    name: "Подготовка к завтраку, завтрак",
  },
  {
    id: 9,
    time1: "7:00-8:30",
    name: "Балдарды кабыл алуу",
  },
  {
    id: 10,
    time1: "8:30-8:50",
    name: "Подготовка к завтраку, завтрак",
  },
];

const LessonGridKyn2 = () => {
  return (
    <div className="lesson2">
      <h3>
        Убакыт<span className="lesson2__span1">Негизги иш</span>
      </h3>
      {tartip1.map((value, id) => {
        return (
          <div className="lessonGrid2__block1" key={id}>
            <div className="lessonGrid2__block2">
              {/* <p className="lesson2__number">{value.id}.</p> */}
              <p className="lesson2__p1">{value.time1}</p>
              <p className="lesson2__p2">{value.name}</p>
            </div>
          </div>
        );
      })}
      <p className="lesson2__p3">Балдардын үйгө кетүүсү</p>
    </div>
  );
};
export default LessonGridKyn2;
