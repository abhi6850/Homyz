

import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import './App.css'
import Companies from './Components/Companies/Companies';
import Residencies from './Components/Residencies/Residencies';
import Value from './Components/Value/Value';
import Contact from './Components/Contact/Contact';
import GetStarted from './Components/GetStarted/GetStarted';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <div id="residency-section">
        <Residencies />
      </div>
      <div id="value-section">
        <Value />
      </div>
      <div id="contact-section">
        <Contact />
      </div>
      <div id="getstarted-section">
        <GetStarted />
      </div>
      <Footer />


    </div>
  );
}

export default App;
