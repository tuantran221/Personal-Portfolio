import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Introduction from "./Components/intro/Introduction";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testinomial from "./Components/Testimonial/Testinomial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import {themeContext} from "./Context"
import { useContext } from "react";
function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode
  return <div className="App"
  style={{
    background: darkMode? 'black': '',
    color: darkMode? 'white': ''
  }}
  >
    <Navbar/>
    <Introduction/>
    <Services/>
    <Experience/>
    <Works/>
    <Portfolio/>
    <Testinomial/>
    <Contact/>
    <Footer/>
    
  </div>;
}

export default App;
