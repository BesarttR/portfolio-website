import React from "react";
import Hero from "./components/Hero";
import Contact from './components/Contact';
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flexGrow: 1 }}>
        <Hero />
        <About />
         <Projects /> 
      </div>
      <Contact /> 
      <Footer/>
    </div>
  );
}


export default App;