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
    time: " 3. 15:30",
    ras: "Логопед",
    kabin: "Балалык тобу",
  },
  {
    id: 2,
    time: "4. 15:30",
    ras: "Дене тарбия",
    kabin: "Спорт зал",
  },
];
const LessonGrid1 = () => {
  return (
    <div>
      <div>
        <h2>Орто тоб “Балалык” 20 мүнөт</h2>
        <div>
          <h3>Сабактар</h3>
          <h3>Кабинеттер</h3>
        </div>
        {lesson1.map((value, index) => {
          return (
            <div className="" key={index}>
              <h4>Күндүн биринчи жарымы</h4>
              <div>
                <p>
                  <span>{value.time}</span>
                </p>
                <div>
                  <p>{value.ras}</p>
                  <p>{value.kabin}</p>
                </div>
              </div>
            </div>
          );
        })}
        {lesson2.map((value, index) => {
          return (
            <div className="" key={index}>
              <h4>Күндүн биринчи жарымы</h4>
              <div>
                <p>
                  <span>{value.time}</span>
                </p>
                <div>
                  <p>{value.ras}</p>
                  <p>{value.kabin}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LessonGrid1;

// {lesson1.map((value, index) => {
//   return (
// <div>
// <div>
// <h4>Күндүн биринчи жарымы</h4>
// <div>
//   <p>
//     <span>1. 09:00</span>
//   </p>
//   <p></p>
// </div>
// </div>
// {/* <div>
// <h4>Күндүн экинчи жарымы</h4>
// <div>
//   <p>
//     <span>1. 09:00</span>
//   </p>
//   <p></p>
// </div>
// </div>
// <div> */}
// );
// })}
