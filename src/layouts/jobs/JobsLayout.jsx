import { Outlet } from "react-router-dom";
import Navbar from "../../components/common/navbar/Navbar";

const JobsLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default JobsLayout;
