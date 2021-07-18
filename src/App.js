import AboutSection from "./Components/AboutSection/AboutSection";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomeSection from "./Components/HomeSection/HomeSection";
import Portfolio from "./Components/Portfolio/Portfolio";
import SkillsSection from "./Components/SkillsSection/SkillsSection";
import "./Styles/Main.css"

function App() {
  return (
    <div className="App container">
      <Header/>
      <HomeSection/>
      <AboutSection/>
      <SkillsSection/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
