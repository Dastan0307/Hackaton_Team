import React from "react";
import EastIcon from '@mui/icons-material/East';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../../assets/logo.svg'
import './succes_auth.scss';

const SuccesAuth = () => {
  return (
    <div className="succes_auth">
      <div className="register__info">
          <img src={logo} alt="error :(" className="register__info_logo" />
          <div className="register__info_mini">
              <h2>Жетекчилер<p>Убакыт үнөмдө</p></h2>
              <h2 className='register__info_text-long'>Ата-энелерге<p>Бала бакчадан балыны коруп туруу</p></h2>
              <h2 className='register__info_text-smoll'>Тарбиячыларга<p>Бардык маалыматтар кол алдында</p></h2>
              <hr className='register__info_line' />
          </div>
          <div className="register__info_list">
              <label ><input type="checkbox" /> Табель</label>
              <label ><input type="checkbox" /> Балдар жонундо толук маалымат</label>
              <label ><input type="checkbox" /> Онлайн дубал гезити</label>
              <label ><input type="checkbox" /> Төлөмдөр</label>
              <label ><input type="checkbox" /> Тамактануу</label>
              <label ><input type="checkbox" /> Баланын өнүгүшү</label>
          </div>
      </div>
      <div className="succes__aut_profile">
        <div className="success__auth_user">
          <AccountCircleIcon className="succes__auth_icon" sx={{ fontSize: 90, color: '#D9D9D9', marginBottom: 8, marginTop: 30 }} />
          <p>name</p>
          <label>колдонуучу ысым</label>
          <p style={{ marginBottom: 74 }}>Алимова Наиля  Мирлановна</p>
          <p>№58 “Жылдыз”</p>
          <label>Бала бакча чоо-жайы</label>
        </div>
      </div>
    </div>
  )
};

export default SuccesAuth;
