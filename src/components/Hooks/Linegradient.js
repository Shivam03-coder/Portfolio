import { motion } from "framer-motion";

const Linegradient = ({ width = "w-full" }) => {
  return (
    <motion.div
      className={`h-0.5 ${width} bg-[#b624ff]`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    ></motion.div>
  );
};

export default Linegradient;
