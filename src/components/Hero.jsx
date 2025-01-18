import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/nagaraj.jpg";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoCall } from "react-icons/io5";


const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b overflow-hidden border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 mt-10 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Nagaraj K
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-5xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-xl"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-6">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-full"
              src={profilePic}
              alt="Rudra Gowda H"
            />
          </div>
        </div>
        <div className="flex flex-wrap mt-3 lg:gap-8 gap-3">
        <motion.button
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/Resume.pdf"; // Update with the correct path to your resume file
            link.download = "Resume.pdf"; // Customize the downloaded file name
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="lg:mx-20 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        >
          <span className="relative text-xl px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Resume
          </span>
        </motion.button>
        <motion.a
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
          href="https://www.linkedin.com/in/nagaraj-k-600b522b9/"
          target="_blank"
          className="text-5xl"
        >
          <FaLinkedin className="text-blue-500 bg-white rounded-full"/>
        </motion.a>
        <motion.a
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        href="https://github.com/Nagaraj-kosigi"
        className="text-5xl"
        target="_blank">
          <FaGithub />
        </motion.a>
        <motion.a
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        href="tel:9741078731"
        className="text-5xl text-yellow-400"
        >
          <IoCall />
        </motion.a>
      </div>
      </div>
      
    </div>
  );
};

export default Hero;
