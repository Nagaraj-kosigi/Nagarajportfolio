import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import {motion} from "framer-motion";


const About = () => {
  return (
    <div className="overflow-hidden border-b pb-4 border-neutral-900">
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="mt-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me </span>
      </motion.h1>
      <div className="flex mt-6 flex-wrap">
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        className="w-full lg:w-1/2 lg:p-5">
          <div className="flex items-center justify-center">
            <img className="rounded-full" src={aboutImg} alt="About" />
          </div>
        </motion.div>
        <div className="w-full lg:w-1/2">
          <motion.div
           whileInView={{opacity:1,x:0}}
           initial={{opacity:0,x:100}}
           transition={{duration:1}}
           className="flex justify-center lg:mt-20 lg:justify-start mt-10">
            <p className="my-2 max-w-xl py-6 text-xl">{ABOUT_TEXT}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
