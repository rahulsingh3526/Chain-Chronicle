import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "./framer";

export const TypingText = ({ title }: any) => (
  <motion.p
    variants={textContainer}
    className={`text-white text-3xl font-thin`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : title}
      </motion.span>
    ))}
  </motion.p>
);

// export const TitleText = ({ title, textStyles }) => (
//   <motion.h2
//     variants={textVariant2}
//     initial="hidden"
//     whileInView="show"
//     className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
//   >
//     {title}
//   </motion.h2>
// );
