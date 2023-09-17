import "./footer.scss";
import logo from "./imag/logo.png";
import grass from "./imag/grass.png";
import instagram from "./imag/instagram.png";
import youtube from "./imag/youtube.png";
import facebook from "./imag/facebook.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={grass} className="grass" />
      <div className="foot">
        <div>
          <img src={logo} className="logo" />
          <div>
            <img src={instagram} className="inst" />
            <img src={youtube} className="inst" />
            <img src={facebook} className="inst" />
          </div>
        </div>
        <div className="list">
          <h3 className="list__h2">Башкы бет</h3>
          <h3 className="list__h2">Бала бакчага</h3>
          <h3 className="list__h2">Ата-энелер үчүн</h3>
          <h3 className="list__h2">Галлерея</h3>
        </div>
        <div className="contacts">
          <p className="contacts__par">
            Адрес: Кыргызстан. Бишкек. Билим берүү министрлиги, Касым
            Тыныстанова 257
          </p>
          <p className="contacts__par">
            <a href="#" className="email" id="not">
              E-mail: edu@mail.gov.kg ibilim.kg@gmail.com
            </a>
          </p>
          <p className="contacts__par">
            <a href="#" className="phone_number" id="not">
              Телефон: +996(312) 62-05-19
            </a>
          </p>
          <p className="contacts__par">© 2023 кунтартип. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
