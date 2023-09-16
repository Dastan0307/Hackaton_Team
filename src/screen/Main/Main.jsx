import React from "react";
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
import Home from "./Home";
// import Slider from "../../components/Slider";
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
  return (
    <div className="">
      <a href='register'>Register</a>
      <a href='profile'>Proflie</a>
    </div>
  )
};

export default Main;
