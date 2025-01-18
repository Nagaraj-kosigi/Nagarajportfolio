import { PROJECTS } from "../constants";
import {motion} from "framer-motion";



const Projects = () => {
  return (
    <div className="overflow-hidden border-b border-neutral-900 pb-4">
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="text-4xl my-20 text-center">Projects</motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
            className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={150}
                height={150}
                className="rounded mb-6"
                alt={project.title}
              />
            </motion.div>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1.5}}
            className="w-full flex flex-wrap max-w-xl lg:w-3/4">
              <h6 className="font-semibold mb-2">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 font-medium text-sm mr-2 rounded text-purple-500 bg-neutral-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
