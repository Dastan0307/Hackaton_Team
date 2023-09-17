import { useState } from "react";
import logo from "../../images/logo/Logo.png";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState({
    forKids: false,
    forParents: false,
    gallery: false,
  });

  const handleMouseLeave = (menuName) => {
    setOpenMenu((prevMenu) => ({ ...prevMenu, [menuName]: false }));
  };

  const menuItems = {
    forKids: [
      { linkTo: "/kuraktyk-toptor", title: "Курактык топтор" },
      { linkTo: "/", title: "Жаңылыктар" },
      { linkTo: "/", title: "Документтер жөнүндө маалымат" },
      { linkTo: "/", title: "Бакчанын эрежелери" },
    ],
    forParents: [
      { linkTo: "/lesson-Grid", title: "Сабак торчо" },
      { linkTo: "/", title: "Күн тартип" },
      { linkTo: "/daily-order", title: "Сабак жүгүртмөсү" },
      { linkTo: "/", title: "Табель" },
      { linkTo: "/", title: "Кечелер" },
      { linkTo: "/", title: "Ата-энелердин фонду жөнүндө отчет" },
      { linkTo: "/", title: "Тамактануу" },
    ],
    gallery: [
      { linkTo: "/birinchi-kenje-top", title: "Биринчи кенже тоб" },
      { linkTo: "/", title: "Экинчи кенже тоб" },
      { linkTo: "/", title: "Ортонку тоб" },
      { linkTo: "/", title: "Жогорку тоб" },
      { linkTo: "/", title: "Мектепке даярдоо тобу" },
    ],
  };

  const toggleMenu = (menuName) => {
    setOpenMenu((prevMenu) => ({
      ...prevMenu,
      [menuName]: !prevMenu[menuName],
    }));
  };

  return (
    <header className="flex flex-fd-c flex-ai-c">
      <nav className="flex flex-jc-c">
        <div className="navbar flex flex-jc-sb">
          <div className="navbar-logo flex flex-ai-c">
            <Link to={"/"}>
              <img src={logo} alt="logo-image" />
            </Link>
          </div>
          <ul className="navbar-menu flex flex-jc-sa flex-ai-c">
            <Link to={"/"}>
              <li className="navbar-menu__items">Башкы бет</li>
            </Link>
            <li
              className="navbar-menu__items"
              onMouseLeave={() => handleMouseLeave("forKids")}
              aria-expanded={openMenu.forKids ? "true" : "false"}
              onClick={() => toggleMenu("forKids")}
            >
              Бала бакчага
              {openMenu.forKids && (
                <ul className={`dropdown-menu display`}>
                  {menuItems.forKids.map(({ linkTo, title }, index) => (
                    <li key={index}>
                      <Link
                        to={linkTo}
                        onClick={() => handleMouseLeave("forKids")}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li
              className="navbar-menu__items"
              onMouseLeave={() => handleMouseLeave("forParents")}
              aria-expanded={openMenu.forParents ? "true" : "false"}
              onClick={() => toggleMenu("forParents")}
            >
              Ата-энелер үчүн
              {openMenu.forParents && (
                <ul className={`dropdown-menu2 display`}>
                  {menuItems.forParents.map(({ linkTo, title }, index) => (
                    <li key={index}>
                      <Link
                        to={linkTo}
                        onClick={() => handleMouseLeave("forParents")}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li
              className="navbar-menu__items"
              onMouseLeave={() => handleMouseLeave("gallery")}
              aria-expanded={openMenu.gallery ? "true" : "false"}
              onClick={() => toggleMenu("gallery")}
            >
              Галерея
              {openMenu.gallery && (
                <ul className={`dropdown-menu3 display`}>
                  {menuItems.gallery.map(({ linkTo, title }, index) => (
                    <li key={index}>
                      <Link
                        to={linkTo}
                        onClick={() => handleMouseLeave("gallery")}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
          <div className="navbar-language flex flex-jc-c flex-ai-c">
            <p>Кыр</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
