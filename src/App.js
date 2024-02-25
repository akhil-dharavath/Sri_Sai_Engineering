import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Principles from "./screens/Principles";
import Technical from "./screens/Technical";
import NonTechnical from "./screens/NonTechnical";
import Projects from "./screens/Projects";
import OurEquipments from "./screens/OurEquipments";
import About from "./screens/About";
// import MarginTop from "./components/marginTop";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <MarginTop/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/principles" element={<Principles />} />
        <Route path="/technical" element={<Technical />} />
        <Route path="/non-technical" element={<NonTechnical />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/our-equipments" element={<OurEquipments />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
