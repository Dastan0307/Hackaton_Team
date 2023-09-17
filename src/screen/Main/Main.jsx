import React, { useEffect } from "react";
import Google from "../img/Google.png";
import AppStore from "../img/AppStore.png";
import baby1 from "../img/baby1.png";
import baby2 from "../img/baby2.png";
import baby3 from "../img/baby3.png";
import baby4 from "../img/baby4.png";
import baby5 from "../img/baby5.png";
import day1 from "../img/day1.png";
import day2 from "../img/day2.png";
import day3 from "../img/day3.png";
import day4 from "../img/day4.png";
import day5 from "../img/day5.png";
import oppor1 from "../img/oppor1.png";
import oppor2 from "../img/oppor2.png";
import oppor3 from "../img/oppor3.png";
import oppor4 from "../img/oppor4.png";
import oppor5 from "../img/oppor5.png";
import oppor6 from "../img/oppor6.png";
import oppor7 from "../img/oppor7.png";
import family from "../img/family.png";
import "./Main.scss";
import Home from "../../pages/home/Home";
import axios from "axios";
let days = [
  {
    id: 1,
    cover: day1,
    ras: "Күн тартиби",
  },
  {
    id: 2,
    cover: day2,
    ras: "Тамактануу",
  },
  {
    id: 3,
    cover: day3,
    ras: "Психолог",
  },
  {
    id: 4,
    cover: day4,
    ras: "Логопед",
  },
  {
    id: 5,
    cover: day5,
    ras: "Англис тили",
  },
];
let babies = [
  {
    id: 1,
    imag: baby1,
    text1: "1-кенже тоб",
    text2: "2 жаш",
  },
  {
    id: 2,
    imag: baby2,
    text1: "2-кенже тоб",
    text2: "3",
  },
  {
    id: 3,
    imag: baby3,
    text1: "Орто тоб",
    text2: "4 жаш",
  },
  {
    id: 4,
    imag: baby4,
    text1: "Жогорку тоб",
    text2: "5 жаш",
  },
  {
    id: 5,
    imag: baby5,
    text1: "Мектепке даярдоо тобу",
    text2: "6 жаш",
  },
];
const Main = () => {
  useEffect(() => {
    const test = async () => {
      try {
        const response = await axios.post(
          "http://1234/api/auth/registration/web",
          {
            childGardenName: "string",
            language: "string",
            email: "mama@gmail.com",
            password: "12345678",
            roleName: "PARENT",
            phoneNumber: "+996555555555",
          }
        );
      } catch (error) {
        console.log(error);
      }
    };
    test();
  }, []);
  return (
    <>
      <div className="my-container">
        <Home />
        <div className="section-header">
          <h2 className="section-title">Система жөнүндө</h2>
          <p className="section-text">
            «Күн тартип» бала бакчанын, ата-энелердин жана бакча
            администрациясынын заманбап билим берүү ресурстарына жана
            технологияларын жеткиликтүүлүгүн камсыз кылуу максатында иштелип
            чыккан. Бул система заманбап браузерлер аркылуу да, бекер тиркемелер
            аркылуу да жеткиликтүү. Тиркеме бала бакчадагы окуялар жөнүндө
            кабарлайт, ал эми сиз ата-эне болсоңуз, анда сиздин балаңыз тууралуу
            маалымат.
          </p>
        </div>
        <div className="store-link">
          <a
            className="store-link__googel"
            target="_blank"
            href="https://boomerang.kg/"
          >
            <img src={Google} />
          </a>
          <a className="store-link__app" target="_blank" href="about:blank">
            <img src={AppStore} />
          </a>
        </div>
        <div className="old1">
          <div className="old">
            <h2 className="old__h2">Курактык топтор</h2>
            <div className="old__image-card">
              {babies.map((value, index) => {
                return (
                  <div className="old__card-item" key={index}>
                    <img src={value.imag} />
                    <p>{value.text1}</p>
                    <p>{value.text2}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <h2 className="oppor__h2">Мүмкүнчүлүктөр</h2>
        <div className="oppor">
          <div className="oppor__block1">
            <div className="oppor__flex1">
              <div className="oppor__flex2">
                <img className="oppor__imag1" src={oppor1} />
                <div>
                  <p className="text teb1">
                    Баланын <br /> өнүгүшү
                  </p>
                  <img className="oppor__str1" src={oppor7} width={70} />
                </div>
              </div>
              <div className="oppor__flex2 oran">
                <img className="oppor__imag1" src={oppor2} />
                <div>
                  <p className="text teb2">
                    Медициналык <br /> көзөмөл
                  </p>
                  <img className="oppor__str1" src={oppor7} width={70} />
                </div>
              </div>
            </div>
            <div className="oppor__flex1">
              <div className="oppor__flex2 green">
                <img className="oppor__imag1" src={oppor3} />
                <div>
                  <p className="text teb3">
                    Жеке <br /> баракча
                  </p>
                  <img className="oppor__str1" src={oppor7} width={70} />
                </div>
              </div>
              <div className="oppor__flex2 green2">
                <img className="oppor__imag1" src={oppor4} />
                <div>
                  <p className="text teb4">
                    Бала бакчадагы <br /> иштер
                  </p>
                  <img className="oppor__str1" src={oppor7} width={70} />
                </div>
              </div>
            </div>
            <div className="oppor__flex1">
              <div className="oppor__flex2 blue">
                <img className="oppor__imag1" src={oppor5} />
                <div>
                  <p className="text teb5">
                    Окуу <br /> материалдар
                  </p>
                  <img className="oppor__str1" src={oppor7} width={70} />
                </div>
              </div>
              <div className="oppor__flex2 blue2">
                <img className="oppor__imag1" src={oppor6} />
                <div>
                  <p className="text teb6">Табель</p>
                  <img className="oppor__str1" src={oppor7} width={70} />
                </div>
              </div>
            </div>
          </div>
          <div className="oppor__block">
            {days.map((value, index) => {
              return (
                <div key={index} className="oppor__con">
                  <img className="oppor__imag" src={value.cover} width={38} />
                  <p className="oppor__str">{value.ras}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="custom-container">
            <div className="column-left">
              <img src={family} alt="Семья" />
            </div>
            <div className="column-right">
              <h2>Биз жөнүндө</h2>
              <p>
                "Биз жөнүндө" блогубузга кош келиңиздер! Биз сиздер менен биздин
                бала бакча үчүн түзүлгөн иштер тууралуу маалыматты бөлүшүүгө
                кубанычтабыз. Бала бакчадагы иштер бардыгы үчүн ачык жана
                ыңгайлуу болушу үчүн тарбиячылар менен ата-энелердин өз ара
                аракеттенүүсүн жеңилдетүү болуп саналат.
              </p>
            </div>
          </div>
          <p className="custom-container__par">
            Бул платформадан сиз баланын өнүгүүсү, окуусун, ден соолугун, бала
            менен убакыт өткөрүү жана башка көптөгөн нерселер тууралуу пайдалуу
            маалыматтарды, кеңештерди жана ыкмаларды таба аласыз. Биз балаңыздын
            өнүгүүсүн жакшыраак түшүнүү жана колдоп жардам берүү үчүн сиздин
            ишенимдүү маалымат булагы болууга аракет кылабыз.
          </p>
        </div>
        <div className="button">
          <button className="button__center">Кирүү</button>
        </div>
      </div>
    </>
  );
};

export default Main;
