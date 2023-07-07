/* eslint-disable react/prop-types */

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Headline = ({ title, subtitle }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
      className="text-center mx-auto md:w-2/3 my-16"
    >
      <h2 className="text-4xl font-bold tracking-wide mt-24 mb-5">{title}</h2>
      <div className="divider"></div>
      <p className="text-tertiary text-xl leading-7 md:w-3/4 text-center mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default Headline;
