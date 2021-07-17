import AboutSection from "./Components/AboutSection/AboutSection";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomeSection from "./Components/HomeSection/HomeSection";
import SkillsSection from "./Components/SkillsSection/SkillsSection";
import "./Styles/Main.css"

function App() {
  return (
    <div className="App">
      <Header/>
      <HomeSection/>
      <AboutSection/>
      <SkillsSection/>
      <Footer/>
    </div>
  );
}

export default App;
