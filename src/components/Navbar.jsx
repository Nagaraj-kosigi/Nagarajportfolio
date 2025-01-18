import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoCall } from "react-icons/io5";


const Navbar = () => {
  return (
    <div>
        <nav className="mb-13 flex overflow-hidden items-center justify-between pt-6">
            <div className="flex flex-shrink-0 items-center">
            {/* <img src={logo} alt="logo" /> */}
            <p style={{fontSize:'35px'}}>NK</p>
            </div>
            <div className=" items-center flex justify-center gap-6 text-4xl">
            <motion.a
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
          href="https://www.linkedin.com/in/nagaraj-k-600b522b9/"
          target="_blank"
          className="text-5xl lg:mr-10"
        >
          <FaLinkedin className="text-blue-500 bg-white rounded-full"/>
        </motion.a>
        <motion.a
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        href="https://github.com/Nagaraj-kosigi"
        className="text-5xl lg:mr-10"
        target="_blank">
          <FaGithub />
        </motion.a>
        <motion.a
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        href="tel:9741078731"
        className="text-5xl lg:mr-20 text-yellow-400"
        >
          <IoCall />
        </motion.a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
