
import Navbar from "./componants/Navbar";
import Banner from "./componants/Banner";
import About from "./componants/About";
import Skill from "./componants/Skill";
import Qualification from "./componants/Qualification";


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Qualification></Qualification>
     
    </div>
  );
};

export default Home;