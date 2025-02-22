import { Outlet } from "react-router-dom";
import Navbar from "../../components/common/navbar/Navbar";

const AuthLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
