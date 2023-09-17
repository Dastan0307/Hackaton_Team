import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderCarousel.scss";
import children from "../../images/background/children.png";
import ball from "../../images/background/ball.png";

export const SliderCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slides">
      <Slider {...settings} className="flex">
        <div className="slide flex-ai-fe" id="slide1">
          <div className="slide-header">
            <div className="slider-header__text">
              <h1>Балдарды өнүктүрүүгө оңой жол</h1>
              <p>
                Балдардын иш-аракеттери жөнүндө маалыматты жеткиликтүү кылуу
                менен, бакчадагы бардык иш-чаралар боюнча маалымдуулукту
                жогорулатуу.
              </p>
            </div>
            <div className="slider-header__button flex flex-jc-sb flex-ai-fe">
              <button className="slider-button">Кирүү</button>
              <img src={ball} />
            </div>
          </div>
          <div className="slide-picture flex flex-jc-fe">
            <img src={children} />
          </div>
        </div>

        <div className="flex-fd-c flex-ai-c" id="slide2">
          <h1>Администрация</h1>
          <p>Бала бакчада кандай жанылыктар</p>
        </div>
        <div className="flex-fd-c flex-ai-c" id="slide3">
          <h1>Тарбиячыларга</h1>
          <p>Баардык маалыматтар сиздин колунузда</p>
        </div>
        <div className="flex-fd-c flex-ai-c" id="slide4">
          <h1>Ата энелер</h1>
          <p>Баардык маалыматтарга кабардар</p>
        </div>
      </Slider>
    </div>
  );
};
