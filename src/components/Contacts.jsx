import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <div className="overflow-hidden border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-4xl text-center mt-20"
      >
        Get in Touch
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="text-center tracking-tighter"
      >
        <p className="my-4">{CONTACT.address}</p>
        {/* <p className="my-4">{CONTACT.phoneNo}</p> */}
        <a href={`tel:${CONTACT.phoneNo}`} className="my-4">
          {CONTACT.phoneNo}
        </a><br />
        <a href={`mailto:${CONTACT.email}`} className="border-b">
          {CONTACT.email}
        </a>
      </motion.div>
    </div>
  );
};

export default Contacts;
