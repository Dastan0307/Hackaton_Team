import { Route, Routes, useLocation } from "react-router-dom";
import "./index.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./screen/Main/Main";
import Login from "./screen/Auth/Login/Login";
import Register from "./screen/Auth/Register/Register";
import ProfilePage from "./screen/ProfilePage/ProfilePage";
import LessonGrid from "./pages/LessonGrid/LessonGrid";
import LessonGridKyn from "./pages/LessonGrid1/LessonGridKyn";
import DailyOrderThen from "./pages/DailyOrder1/DailyOrderThen";
import DailyOrder from "./pages/DailyOrder/DailyOrder";

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
        <Route path="/daily-orderThen" element={<DailyOrderThen />} />
        <Route path="/lesson-Grid" element={<LessonGrid />} />
        <Route path="/lesson-GridKyn" element={<LessonGridKyn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
