import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './screen/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import './index.scss'
 
function App() {
  const location = useLocation();
  return (
    <>
      <Header />
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={ <Main />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App;

