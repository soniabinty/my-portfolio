
import Navbar from "./componants/Navbar";
import Banner from "./componants/Banner";
import About from "./componants/About";
import Skill from "./componants/Skill";
import Qualification from "./componants/Qualification";
import Projects from "./componants/Projects";


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Qualification></Qualification>
      <Projects></Projects>
     
    </div>
  );
};

export default Home;