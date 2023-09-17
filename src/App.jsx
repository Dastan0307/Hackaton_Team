import { Route, Routes, useLocation } from "react-router-dom";
import "./index.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./screen/Main/Main";
import Login from "./screen/Auth/Login/Login";
import Register from "./screen/Auth/Register/Register";
import ProfilePage from "./screen/ProfilePage/ProfilePage";
import DailyOrder from "./pages/DailyOrder/DailyOrder";
import DailyOrder1 from "./pages/DailyOrder/DailyOrder1";
import DailyOrder2 from "./pages/DailyOrder/DailyOrder2";
import LessonGrid from "./pages/LessonGrid/LessonGrid";
import LessonGrid1 from "./pages/LessonGrid/LessonGrid1";
import LessonGrid2 from "./pages/LessonGrid/LessonGrid2";

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
        <Route path="/daily-order1" element={<DailyOrder1 />} />
        <Route path="/daily-order2" element={<DailyOrder2 />} />
        <Route path="/lesson-Grid" element={<LessonGrid />} />
        <Route path="/lesson-Grid1" element={<LessonGrid1 />} />
        <Route path="/lesson-Grid2" element={<LessonGrid2 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
