import React, { useEffect } from "react";
import html from "../Layout/Images/icons8-html-logo-96.png";
import css from "../Layout/Images/icons8-css-logo-96.png";
import Bootstrap from "../Layout/Images/icons8-bootstrap-96.png";
import Tailwindcss from "../Layout/Images/icons8-tailwindcss-96.png";
import Javascript from "../Layout/Images/icons8-javascript-96.png";
import JQuerry from "../Layout/Images/icons8-jquery-100.png";
import git from "../Layout/Images/icons8-git-logo-96.png";
import github from "../Layout/Images/icons8-github-96.png";
import Reactjs from "../Layout/Images/icons8-react-native-96.png";
import Reduxjs from "../Layout/Images/icons8-redux-96.png";
import MaterialuI from "../Layout/Images/icons8-material-ui-96.png";
import Python from "../Layout/Images/icons8-python-96.png";
import { motion } from "framer-motion";
import Linegradient from "../Hooks/Linegradient";

function SkillPage() {
  return (
    <>
      <motion.div
        className="text-5xl text-[rgb(214,99,255)]  max-lg:text-[45px]  max-md:text-[45px]  text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        SKILLS PAGE
      </motion.div>
      <motion.div
        className="cardItems pt-14 max-md:flex max-md:flex-col max-md:items-start max-md:justify-center max-lg:pt-14 pb-20 h-full grid lg:grid-cols-3 md:grid-cols-3 sm::grid-cols-2 mx-auto gap-20 w-10/12"
        id="skills"
      >
        <div className="card1 text-black ">
          <span className="text-center items-center">
            <img src={html} alt="" className="mx-auto" />
          </span>
          <h3>HTML</h3>
        </div>

        <div className="card1  ">
          <span className="text-center items-center">
            <img src={css} alt="" className="mx-auto" />
          </span>
          <h3>CSS</h3>
        </div>

        <div className="card1  ">
          <span className="text-center items-center">
            <img src={Bootstrap} alt="" className="mx-auto" />
          </span>
          <h3>BOOTSTRAP</h3>
        </div>

        <div className="card1  ">
          <span className="text-center items-center">
            <img src={Tailwindcss} alt="" className="mx-auto" />
          </span>
          <h3>TAILWIND CSS</h3>
        </div>

        <div className="card1  ">
          <span className="text-center items-center">
            <img src={Javascript} alt="" className="mx-auto" />
          </span>
          <h3>JAVASCRIPT</h3>
        </div>

        <div className="card1  ">
          <span className="text-center items-center">
            <img src={JQuerry} alt="" className="mx-auto" />
          </span>
          <h3>J QUERRY</h3>
        </div>

        <div className="card1  ">
          <span className="text-center items-center">
            <img src={git} alt="" className="mx-auto" />
          </span>
          <h3>GIT</h3>
        </div>

        <div className="card1  ">
          <span className="text-center items-center">
            <img src={github} alt="" className="mx-auto" />
          </span>
          <h3>GITHUB</h3>
        </div>

        <div className="card1  ">
          <span className="text-center items-center">
            <img src={Reactjs} alt="" className="mx-auto" />
          </span>
          <h3>REACT JS</h3>
        </div>

        <div className="card1  ">
          <span className="text-center items-center">
            <img src={Reduxjs} alt="" className="mx-auto" />
          </span>
          <h3>REDUX JS</h3>
        </div>

        <div className="card1  ">
          <span className="text-center items-center">
            <img src={MaterialuI} alt="" className="mx-auto" />
          </span>
          <h3>MATERIAL UI</h3>
        </div>

        <div className="card1  ">
          <span className="text-center items-center">
            <img src={Python} alt="" className="mx-auto" />
          </span>
          <h3>PYTHON</h3>
        </div>
      </motion.div>
      <Linegradient className="relative max-sm:hidden pt-14 " />
    </>
  );
}

export default SkillPage;
