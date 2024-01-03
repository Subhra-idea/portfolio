
import './App.css';
import Banner from './components/Banner';
import Contact from './components/Contact';
import ExperiEdu from './components/ExperiEdu';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Techstack from './components/Techstack';

function App() {
  return (
    <div className='app' >
      <Navbar/>
      <Banner/>
      <Projects/>
      <Techstack/>
      <ExperiEdu/>
      <Contact/>
      
    </div>
  );
}
export default App;
