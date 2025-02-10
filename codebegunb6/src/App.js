import React from "react";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Header from "./Dashboard/Header";
 import Home from "./Dashboard/Pages/Home";
 import Interface from "./Dashboard/Pages/Interface";
 import Components from "./Dashboard/Pages/Component";
 import Pages from "./Dashboard/Pages/Pages";
 import Forms from "./Dashboard/Pages/Forms";
 import Gallery from "./Dashboard/Pages/Gallery";
 import Documentation from "./Dashboard/Pages/Documentation";



function App() {
  return (
  
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interface" element={<Interface />} />
          <Route path="/components" element={<Components />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
    </Router>
  );
}

export default App;
