import React from "react";

//component imports-
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import HowItWorks from "./components/HowItWorks";
import Mission from "./components/Mission.jsx";
import Dance from "./components/Dance.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Hero />
      <Feature />
      <HowItWorks />
      <Mission />
      <Dance />
      <Footer />
    </div>
  );
}

export default App;
