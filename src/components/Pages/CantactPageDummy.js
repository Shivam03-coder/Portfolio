import React from "react";
import { useForm } from "react-hook-form";
import imageLogo from "../Layout/Images/21532466_6491428-removebg-preview.png";
import { motion } from "framer-motion";
import Linegradient from "../Hooks/Linegradient";

function CantactPageDummy() {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <>
      <motion.div
        className="text-5xl  text-[rgb(214,99,255)] max-lg:text-[45px] mt-20  max-md:text-[45px]    text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        CONTACT PAGE
      </motion.div>
      <div
        className="contactpage rounded-lg max-lg:pt-12 pt-20 pb-20  grid lg:grid-cols-2  gap-16 "
        id="contacts"
      >
        <motion.div
          className="imageGrid max-lg:items-center max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:mx-auto "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img
            src={imageLogo}
            id="MyImage"
            className="h-auto w-5/6 max-w-full"
            alt=""
          />
        </motion.div>
        <motion.div
          className="mailFeild pt-14 max-lg:pt-6 space-y-4 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/shivam850anand@gmail.com"
            method="POST"
          >
            <input
              className="w-full rounded-[6px] bg-[#176B87] text-[yellow] f placeholder-[#AED2FF] p-3"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-[red] mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full rounded-[6px] bg-[#176B87] text-[yellow]  placeholder-[#AED2FF] p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-[red] mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full rounded-[6px] bg-[#176B87] text-[yellow]  placeholder-[#AED2FF] p-3 mt-5"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-[red] mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              className="p-4 rounded-[6px] bg-[#7e25be] font-semibold text-black mt-5 "
              type="submit"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
        </div>
      <Linegradient className="relative  pt-14  " />
    </>
  );
}

export default CantactPageDummy;
