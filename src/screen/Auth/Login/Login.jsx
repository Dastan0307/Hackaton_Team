import GoogleIcon from '@mui/icons-material/Google';
import logo from '../../../assets/Logo.svg'
import '../auth.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../../../store/slices/userSlice';

const Login = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
      const auth = getAuth();
      console.log(auth);
      signInWithEmailAndPassword(auth, email, password)
          .then(({user}) => {
              dispatch(setUser({
                  email: user.email, 
                  id: user.uid,
                  token: user.accessToken,
              }));
              navigate('/')
          })
          .catch(() => alert('Invalid user!'))  
  }

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
            <div className="login__form">
                <div className="login__form_container">
                  <h2>Аккаунтка кирүү</h2>
                  <label>Электрондук почта</label>
                  <input type="email" placeholder='user@gmail.com' onChange={(e) => setEmail(e.target.value)} />
                  <label className='login__form_label'>Сыр сөз <a href="#">Сыр сөзүңүздү унуттуңузбу?</a></label>
                  <input type="password" placeholder='********' onChange={(e) => setPassword(e.target.value) }/>
                  <button className='login__form_btn' onClick={() => handleLogin()}>Кирүү</button>
                  <p>же болбосо</p>
                  <button className='login__form_btn-google'><GoogleIcon color='primary' style={{ marginRight: 7 }}/>Google аркылуу кирүү</button>
                  <a href="register">Азырынча аккантуңуз жокпу? Катталуу</a>
                </div>
            </div>
        </div>
    </>
  )
};

export default Login;
