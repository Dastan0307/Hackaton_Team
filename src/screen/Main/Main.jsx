import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import './main.scss';


const Main = () => {
  return (
    <div className="">
      <a href={<Login />}>Login</a>
      <a href={<Register />}>Register</a>
    </div>
  )
};

export default Main;
