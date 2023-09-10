import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './screen/Main/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './styles/index.scss';
 
function App() {
  const location = useLocation();
  return (
    <>
      <Header />
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={ <Home />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App;

