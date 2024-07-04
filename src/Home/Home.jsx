import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skill/Skills";

const Home = () => {
    return (
     <div>
       <Banner></Banner>
       <About></About>
       <Skills></Skills>
       <Projects></Projects>
       <Contact></Contact>
       
       
     </div>
    );
};

export default Home;