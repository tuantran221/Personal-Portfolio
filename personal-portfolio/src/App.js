import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Introduction from "./Components/intro/Introduction";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testinomial from "./Components/Testimonial/Testinomial";
import Contact from "./Components/Contact/Contact";
function App() {
  return <div className="App">
    <Navbar/>
    <Introduction/>
    <Services/>
    <Experience/>
    <Works/>
    <Portfolio/>
    <Testinomial/>
    <Contact/>
  </div>;
}

export default App;
