import { Route, Routes, useLocation } from "react-router-dom";
import "./index.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./screen/Main/Main";
import Login from "./screen/Auth/Login/Login";
import Register from "./screen/Auth/Register/Register";
import ProfilePage from "./screen/ProfilePage/ProfilePage";
import DailyOrder from "./pages/DailyOrder/DailyOrder";
import LessonGrid from "./pages/LessonGrid/LessonGrid";
import SuccesAuth from "./pages/SuccesAuth/SuccesAuth";
import Table from "./screen/Table/Table";
import Eat from "./screen/Eat/Eat";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/daily-order" element={<DailyOrder />} />
        {/* <Route path="/daily-order1" element={<DailyOrder1 />} /> */}
        {/* <Route path="/daily-order2" element={<DailyOrder2 />} /> */}
        <Route path="/lesson-Grid" element={<LessonGrid />} />
        <Route path="/succes-auth" element={<SuccesAuth />} />
        <Route path="/table" element={<Table />} />
        <Route path="/eat" element={<Eat />} />
        {/* <Route path="/lesson-Grid1" element={<LessonGrid1 />} /> */}
        {/* <Route path="/lesson-Grid2" element={<LessonGrid2 />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
