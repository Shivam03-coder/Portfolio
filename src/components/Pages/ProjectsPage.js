import React from "react";
import imageIp from "../Layout/Images/8577011-removebg-preview.png";
import Imagepet from "../Layout/Images/cute-dog-studio_23-2150687065-removebg-preview.png";
import code from "../Layout/Images/Xtdysbfcsdnfik.png";
import { motion } from "framer-motion";
function ProjectsPage() {
  return (
    <>
      <motion.div
        className="text-5xl  text-[rgb(214,99,255)] max-lg:text-[45px]   max-md:text-[45px]    text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        PROJECT PAGE
      </motion.div>
      <motion.div
        className="ProjectPage pt-20  pb-60 h-full mx-auto grid gap-20 w-10/12 lg:grid-cols-3 md:grid-cols-2 sm::grid-cols-2  max-lg:items-center max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:mx-auto "
        id="projects"
      >
        <div className="card-container rounded-xl ">
          <div className="card max-lg:flex max-lg:flex-row max-lg:items-center max-lg:justify-center ">
            <div className="front ">
              <img className="w-[200px] h-[200px]" src={imageIp} alt="" />
              {/* <h2 className="pb-2 w-full text-2xl text-center text-[#000000]">
                RESTURANT <br /> WEBSITE
              </h2> */}
            </div>
            <div></div>
            <div className="back flex flex-col  ">
              {" "}
              <button className="rounded-[8px] cursor-pointe  font-bold py-2 px-6 bg-[#000000] text-[CYAN]">
                <a
                  href="https://indoripoherestro.netlify.app/"
                  className="href"
                >
                  CLICK HERE
                </a>
              </button>
              <h2 className="pb-2 text-[24px] pt-7  w-full  text-center font-bold text-[#fffdff]">
                RESTURANT <br /> WEBSITE
              </h2>
            </div>
          </div>
        </div>
        <div className="card-container rounded-xl ">
          <div className="card">
            <div className="front">
              <img className="w-[200px] h-[200px]" src={Imagepet} alt="" />
            </div>
            <div></div>
            <div className="back flex flex-col">
              <button className="rounded-[8px] cursor-pointer  font-bold py-2 px-6 text-[#4affdb] bg-black text-[CYAN]">
                <a href="https://petwebsitecss.netlify.app/" className="href">
                  CLICK HERE
                </a>
              </button>
              <h2 className="pb-2 text-[24px] pt-7  w-full  text-center font-bold text-[#ffffff]">
                PET <br /> WEBSITE
              </h2>
            </div>
          </div>
        </div>
        <div className="card-container rounded-xl ">
          <div className="card">
            <div className="front">
              <img className="w-[200px] h-[200px]" src={code} alt="" />
            </div>
            <div></div>
            <div className="back flex flex-col">
              {" "}
              <button className="rounded-[8px] cursor-pointer  font-bold py-2 px-6 bg-[#000000] text-[CYAN]">
                <a href="/" className="href">
                  SOON
                </a>
              </button>
              <h2 className="pb-2 text-[24px] pt-7  w-full  text-center font-bold text-[#ffffff]">
                MORE ON <br /> THE WAY
              </h2>
            </div>
          </div>
        </div>
      </motion.div>
      {/* <Linegradient className="relative pt-20  " />? */}
    </>
  );
}

export default ProjectsPage;
