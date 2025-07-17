import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Header from "./Sections/Header";
import Navbar from "./Sections/Navbar";
import Projects from "./Sections/Projects";
import Services from "./Sections/Services";
import Testimonalis from "./Sections/Testimonails";
import Footer from "./Sections/Footer";
import Loader from "./Sections/Loader";
import ProjectDetails from "./Sections/Projects/ProjectDetails"; 

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
      {loading && <Loader />}
      {
        !loading &&
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <About />
                <Services />
                <Projects />
                <Testimonalis />
                <Contact />
                <Footer />
              </>
            } />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </>
      }
    </Router>
  );
};

export default App;
