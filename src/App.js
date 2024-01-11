import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Leftbar from "./Components/Leftbar";
import Rightbar from "./Components/Rightbar";
import { useState } from "react";
import { useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import Mobile from "./Components/Mobile";

function App() {
  // declaring a variable to use useState hook
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const [theme, setTheme] = useState("dark");
  const updateTheme = (newTheme) => {
    setTheme(newTheme);
  };
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.remove("body-light");
      document.body.classList.add("body-dark");
    }
    if (theme === "light") {
      document.body.classList.remove("body-dark");
      document.body.classList.add("body-light");
    }
  }, [theme]);
  return (
    <>
      {isMobile ? (
        <div className="flex justify-center items-center h-screen">
          <Mobile />
        </div>
      ) : (
        <div className="flex py-10">
          <Router>
            <Leftbar updateTheme={updateTheme} currentTheme={theme} />
            <Routes>
              <Route
                exact
                path="/"
                element={<AboutMe currentTheme={theme} />}
              ></Route>
              <Route
                exact
                path="/projects"
                element={<Projects currentTheme={theme} />}
              ></Route>
              <Route
                exact
                path="/contact"
                element={<Contact currentTheme={theme} />}
              >
                {" "}
              </Route>
            </Routes>
            <Rightbar />
          </Router>
        </div>
      )}
    </>

    // <div className="flex py-10">
    //   <Router>
    //     <Leftbar updateTheme={updateTheme} currentTheme={theme} />
    //     <Routes>
    //       <Route
    //         exact
    //         path="/"
    //         element={<AboutMe currentTheme={theme} />}
    //       ></Route>
    //       <Route
    //         exact
    //         path="/projects"
    //         element={<Projects currentTheme={theme} />}
    //       ></Route>
    //       <Route
    //         exact
    //         path="/contact"
    //         element={<Contact currentTheme={theme} />}
    //       >
    //         {" "}
    //       </Route>
    //     </Routes>
    //     <Rightbar />
    //   </Router>
    // </div>
  );
}

export default App;
