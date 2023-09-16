import React from "react";
let daily1 = [
  {
    id: 1,
    text: "Айлана- чөйрө менен таанышуу жана кеп өстүрүү ",
  },
  {
    id: 2,
    text: "Кеп өстүрүү",
  },
  {
    id: 3,
    text: "Сабат ачуу",
  },
  {
    id: 4,
    text: "Элементардык математикалык түшүнүктөрдү калыптандыруу",
  },
  {
    id: 5,
    text: "Сенсордук тарбиалоо боюнча дидактикалык оюндар",
  },
  {
    id: 6,
    text: "Конструкциялоо",
  },
  {
    id: 7,
    text: "Көркөм адабият",
  },
  {
    id: 8,
    text: "Музыка сабагы",
  },
  {
    id: 9,
    text: "Дене тарбиялоо",
  },
  {
    id: 10,
    text: "Жабыштырып жасоо(Лепка) ",
  },
  {
    id: 11,
    text: "Аппликация",
  },
  {
    id: 12,
    text: "Сүрөт тартуу",
  },
  {
    id: 13,
    text: "Кыргыз тили",
  },
];

const DailyOrder1 = () => {
  return (
    <>
      <div className="daily1">
        <h2 className="daily1__h2">Орто тоб</h2>
        <div className="daily1__block">
          {daily1.map((value, index) => {
            return (
              <div className="" key={index}>
                <ul>
                  <li className="daily1__li">{value.text}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DailyOrder1;
