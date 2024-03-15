import "./App.css";
import React, { useEffect, useState } from "react";
import Navbars from "./components/Layout/Navbars";
import LandingPage from "./components/Layout/LandingPage";
import { Toolbar } from "@mui/material";
import SkillPage from "./components/Pages/SkillPage";
import ProjectsPage from "./components/Pages/ProjectsPage";
import CantactPageDummy from "./components/Pages/CantactPageDummy";
import { motion } from "framer-motion";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");

  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App space-y-8 ">
      <Navbars
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Toolbar />
      <div className="h-full w-5/6 mx-auto">
        <LandingPage setSelectedPage={setSelectedPage} />
      </div>

      <div className="w-5/6  mx-auto md:h-full ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        > 
          <SkillPage />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto md:h-full ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <ProjectsPage />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto md:h-full ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <CantactPageDummy />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
