import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Header from "./Sections/Header";
import Navbar from "./Sections/Navbar";
import Projects from "./Sections/Projects";
import Services from "./Sections/Services";
import Testimonalis from "./Sections/Testimonails";
import Footer from "./Sections/Footer";
import Loader from "./Sections/Loader";
import { useEffect, useState } from 'react';
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timeout);
  }, [])

  return (
    <>
      {loading && <Loader />}
      {
        !loading &&
        <>
          <Navbar />
          <Header />
          <About />
          <Services />
          <Projects />
          <Testimonalis />
          <Contact />
          <Footer />
        </>
      }
    </>
  );
};

export default App;
