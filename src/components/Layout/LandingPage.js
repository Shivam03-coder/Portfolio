import React from "react";
import { motion } from "framer-motion";
import MYProfile from "./Images/Image.png";
import { Typography } from "@mui/material";
import Linegradient from "../Hooks/Linegradient";
import { Typewriter } from "react-simple-typewriter";
import SocoalMediaHandles from "./SocoalMediaHandles";
import { Link } from "react-scroll";

function LandingPage({ setSelectedPage }) {
  return (
    <>
      <div
        className="LandingPage max-lg:pb-16 flex items-center justify-center "
        id="home"
      >
        <section className="flex justify-between max-lg:text-center  items-center h-full gap-16 pb-40">
          {/* IMAGE SECTION */}
          <motion.div
            className="grid lg:grid-cols-2 gap-7 mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className=" my-auto max-lg::order-2">
              <Typography variant="h3" className="text-[cyan] tracking-wider ">
                I am a <br className="max-lg:block hidden " />
                <Typewriter
                  className="font-extrabold text-black "
                  words={[
                    " Developer.",
                    " Designer.",
                    " Photographer.",
                    " Thinker.",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  cursorColor="white"
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </Typography>
              <p className=" max-lg:hidden mt-6 font-normal text-2xl ">
                I am a{" "}
                <span className="text-[#fb3eeb] font-bold ">WEB DEVELOPER</span>{" "}
                my primary goal is to create functional and visually appealing
                websites that meet the needs of clients and users. I have a
                strong understanding of programming languages such as{" "}
                <span className="text-[#fb3eeb] font-bold ">
                  HTML, CSS, and JavaScript{" "}
                </span>
                which allows me to build responsive and interactive websites.
              </p>
              <div className="buttons  max-lg:hidden mx-auto mt-10">
                <Link
                  className="rounded-[8px] cursor-pointer shadow-3xl font-bold py-2 px-4 bg-[#fb3eeb] text-black "
                  onClick={() => setSelectedPage("contact")}
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                >
                  CONTACT ME
                </Link>
              </div>
              <div className="icons max-lg:hidden mx-auto mt-10">
                <SocoalMediaHandles />
              </div>
            </div>
            <div className="Image">
              <img
                className=" z-10 py-auto max-lg:shadow-none  shadow-3xl w-10/12 hover:filter 
              transition-all duration-500
              grayscale-[17] hover:grayscale-[0]"
                src={MYProfile}
                alt=""
                id="MyProfilePhoto"
              />
              <div className="icons lg:hidden text-center mx-auto mt-20">
                <SocoalMediaHandles />
              </div>
            </div>
          </motion.div>
        </section>
      </div>
      <Linegradient className="relative  mt-4 " />
    </>
  );
}

export default LandingPage;
