import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./page/Home";
import Articles from "./page/Articles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="">
      {/* navigation du site avec React router dom */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Articles />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
