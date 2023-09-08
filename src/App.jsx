import { Route, Routes, useLocation } from 'react-router-dom';
import './index.scss'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Main from './screen/Main/Main';
import Login from './screen/Auth/Login/Login';
import Register from './screen/Auth/Register/Register';
 
function App() {
  const location = useLocation();
  return (
    <>
      <Header />
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={ <Main />} />
          <Route path='register' element={ <Register />} />
          <Route path='login' element={ <Login />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App;

