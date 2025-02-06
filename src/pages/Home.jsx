import { Outlet } from "react-router-dom";
import Navbar from "./componants/Navbar";


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
     
    </div>
  );
};

export default Home;