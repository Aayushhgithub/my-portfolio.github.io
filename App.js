import logo from './logo.svg';
import './App.css';
import Header from './pages/header.js'
import Navbar from './pages/Navbar.js'
import About from './pages/About.js'
import Education from './pages/Education.js';
import Project from './pages/Project.js'
import Contact from './pages/Contact.js'
import Footer from './pages/Footer.js'


function App() {
  return (
    <div className="App">
   <Navbar/>
   <Header/>
   <About/>
   <Education/>
   <Project/>
   <Contact/>
   < Footer/>
    </div>
  );
}

export default App;
