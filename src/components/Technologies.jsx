import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandNodejs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import PythonLogo from "../assets/PythonLogo.jpg";
import {motion} from "framer-motion";
import { SiMysql } from "react-icons/si";


const iconVariants = (duration)=>({
    initial:{y:-10},
    animate:{
        y:[-10,10],
        transition:{
            duration:duration,
            repeat:Infinity,
            ease:"linear",
            repeatType:"reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className="overflow-hidden border-b border-neutral-800 pb-24">
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-4xl text-center">Technologies</motion.h1>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-200}}
      transition={{duration:1.5}}
      className="flex flex-wrap justify-center gap-4 text-center">
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 pb-4">
            <FaHtml5 className="text-7xl rounded-2xl text-orange-600 bg-white"/>
        </motion.div>
        <motion.div 
         variants={iconVariants(3)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 pb-4">
            <IoLogoCss3 className="text-7xl text-blue-500 bg-white  "/>
        </motion.div>
        <motion.div 
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
          className="rounded-2xl border-4 border-neutral-800 pb-4">
            <SiJavascript className="text-7xl text-yellow-300"/>
        </motion.div>
        <motion.div 
         variants={iconVariants(3)}
         initial="initial"
         animate="animate" 
         className="rounded-2xl border-4 border-neutral-800 pb-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
          className="rounded-2xl border-4 border-neutral-800 pb-4">
            <SiMysql className="text-7xl text-yellow-300"/>
        </motion.div>
        <motion.div 
         variants={iconVariants(2)}
         initial="initial"
         animate="animate" 
         className="rounded-2xl border-4 border-neutral-800 pb-4">
            <BiLogoMongodb className="text-7xl text-green-500"/>
        </motion.div>
        <motion.div 
         variants={iconVariants(3)}
         initial="initial"
         animate="animate" 
         className="rounded-2xl border-4 border-neutral-800 pb-4">
            <TbBrandNodejs className="text-7xl text-green-500"/>
        </motion.div>
        <motion.div 
         variants={iconVariants(2)}
         initial="initial"
         animate="animate"
          className="rounded-2xl border-4 border-neutral-800 pb-4">
            <SiTailwindcss 
            className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
         variants={iconVariants(3)}
         initial="initial"
         animate="animate" 
         className="rounded-2xl border-4 border-neutral-800 pb-4">
            <FaBootstrap className="text-7xl bg-white text-blue-600 "/>
        </motion.div>
        <motion.div 
         variants={iconVariants(2)}
         initial="initial"
         animate="animate"
          className="rounded-2xl border-4 border-neutral-800 pb-4">
            <img src={PythonLogo} alt="Python Logo" className="object-scale-down w-14 rounded-2xl"/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies;
