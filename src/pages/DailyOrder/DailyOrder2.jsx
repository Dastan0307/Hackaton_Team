import React from "react";
let daily2 = [
  {
    id: 1,
    text: "Айлана- чөйрө менен таанышуу жана кеп өстүрүү ",
    theme: "Ар башка улуттагы балдар планетаны сакташат",
    target: "Маданият аралык толеранттуулукту калыптандыруу",
    fir1: "1.Сүрөттөрдү көргөзүү.",
    second1: "2.Мультфильм коргөзүү “Керемет көч”. ",
    third1: "3.Аңгемелешүү.",
    fir2: "1.Ар башка улуттун майрамынын өзгөчөлүктөрү жөнүндө билүү.",
    second2: "2.Улуттук майрамдарга позитивдүү эмоционалдык мамиле",
    third2: "3.Суйлөп жатканда эмоцияны билдире алуу.  ",
  },
  {
    id: 2,
    text: "Кеп өстүрүү.",
    theme: "Тыбыштар дүйнөсүндө",
    target: "(с),(з),(ш) тыбыштарын туура айтуу көндүүмдөрүн бышыктоо.  ",
    fir1: "1.Карточкларды көргөзүү.",
    second1: "2.Ыр окуп берүү.",
    third1: "3.Аңгемелешүү.",
    fir2: "1.Сөздүк-логикалык ой  жүгүртүүсүн активдештирүү, угуу жөндөмүн, артикуляция жана майда моторикасын өнүктүрүү",
    second2: "2.Таанып билүү ишмердигине кызыгууну калыптандыруу.",
    third2: "",
  },
];
let daily3 = [
  {
    id: 1,
    text: "Логопедия",
    theme1: "тапшырмалар",
    theme2: "ыкмалар",
    theme3: "маалыматтар",
  },
  {
    id: 1,
    text: "Дене тарбия",
    theme1: "сүрөттөр менен отчёт",
    theme2: "",
    theme3: "",
  },
];
const DailyOrder2 = () => {
  return (
    <>
      <div className="daily2">
        <h2 className="daily2__h2">Орто тоб</h2>
        {/* Carusel */}
        <div className="glav">
          <div className="daily2__block">
            {daily2.map((value, index) => {
              return (
                <div className="daily3__block1" key={index}>
                  <h3 className="daily3__h3">{value.text}</h3>
                  <p>
                    <span>Тема:</span>“{value.theme}”
                  </p>
                  <p>
                    <span>Максаты:</span>
                    {value.target}
                  </p>
                  <span>Методикалык ыкмалары:</span>
                  <div className="daily3__block3">
                    <p>{value.fir1}</p>
                    <p>{value.second1}</p>
                    <p>{value.third1}</p>
                  </div>
                  <span>Пландаштырылган натыйжа:</span>
                  <div className="daily3__block4">
                    <p>{value.fir2}</p>
                    <p>{value.second2}</p>
                    <p>{value.third2}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="daily4">
            <h3>Күндүн экинчи жарымы</h3>
            {daily3.map((value, index) => {
              return (
                <div className="daily4__block" key={index}>
                  <div className="daily4__block1">{value.text}</div>
                  <div className="daily4__block2">
                    <p>{value.theme1}</p>
                    <p>{value.theme2}</p>
                    <p>{value.theme3}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyOrder2;
