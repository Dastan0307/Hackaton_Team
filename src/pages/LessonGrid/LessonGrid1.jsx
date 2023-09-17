import React from "react";
let lesson1 = [
  {
    id: 1,
    time: "1. 09:00",
    ras: "Айлана-чөйрө менен таанышуу",
    kabin: "Балалык тобу",
  },
  {
    id: 2,
    time: "2. 09:20",
    ras: "Кеп өстүрүү",
    kabin: "Балалык тобу",
  },
];
let lesson2 = [
  {
    id: 1,
    time1: " 3. 15:30",
    ras1: "Логопед",
    kabin1: "Балалык тобу",
  },
  {
    id: 2,
    time1: "4. 15:30",
    ras1: "Дене тарбия",
    kabin1: "Спорт зал",
  },
];
const LessonGrid1 = () => {
  return (
    <div>
      <div className="lessonGrid">
        <h2 className="lessonGrid__h2">Орто тоб “Балалык” 20 мүнөт</h2>
        <div className="lessonGrid__flex">
          <h3>Сабактар</h3>
          <h3>Кабинеттер</h3>
        </div>
        <div>
          <h4 className="lessonGrid__h4">Күндүн биринчи жарымы</h4>
          {lesson1.map((value, index) => {
            return (
              <div className="" key={index}>
                <div className="lessonGrid__flex1">
                  <p>
                    <span>{value.time} </span>
                    {value.ras}
                  </p>
                  <p>{value.kabin}</p>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
        <div>
          <h4 className="lessonGrid__h4">Күндүн экинчи жарымы</h4>
          {lesson2.map((value1, id) => {
            return (
              <div className="" key={id}>
                <div className="lessonGrid__flex1">
                  <p>
                    <span>{value1.time1} </span>
                    {value1.ras1}
                  </p>
                  <p>{value1.kabin1}</p>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LessonGrid1;
