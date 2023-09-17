import EastIcon from '@mui/icons-material/East';
import logo from '../../../assets/Logo.svg'
import '../auth.scss'

const Register = () => {
  return (
    <>
        <div className="container">
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
            <div className="register__form">
                <div className="register__form_choice">
                    <p>Жеке баракчага кирүү</p>
                    <label ><input type="checkbox" /> Биз бала бакчабыз</label>
                    <label ><input type="checkbox" /> Ата-энебиз</label>
                    <label ><input type="checkbox" /> Биз тарбиячыбыз</label>
                </div>  
                <form className='form'>
                    <input type="text" placeholder='Ысым (Логин)' />
                    <input type="text" placeholder='Пароль:' />
                    <input type="email" placeholder='E-mail:' />
                    <label >Тил</label>
                    <select name="form" id="form" className='form__inp'>
                        <option value="Кыргызча">Кыргызча</option>
                        <option value="Русский">Русский</option>
                    </select>
                    <input type="text" placeholder='Бала бакчанын аты' />
                    <label >Телефон: </label>
                    <input className='form-tele' type="text" placeholder='+996 '/>
                </form>
                <label className='form__text'><input type="checkbox"  /> <p>Кирүү менен сиз Коомдук сунушка макулдугуңузду билдиресиз, ошондой эле аны окуп чыкканыңызды ырастайсыз.</p></label>
                <button type="submit" className='form__btn'>Кирүү <EastIcon /></button>
            </div>
        </div>
    </>
  )
};

export default Register;
