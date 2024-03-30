import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";

function Home(){
return <div id="home">
    <Header/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
</div>
}
export default Home