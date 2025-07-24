import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
  ? "text-black border-black"
  : "text-[#8E8E93] border-none";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold xl:text-3xl md:text-2xl sm:text-xl hover:text-black ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-black mt-1 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;