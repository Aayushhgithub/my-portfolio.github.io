import logo from './logo.svg';
import './App.css';
import Header from './header.js'
import Navbar from './Navbar.js'
import About from './About.js'
import Education from './Education.js';
import Project from './Project.js'
import Contact from './Contact.js'
import Footer from './Footer.js'


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
