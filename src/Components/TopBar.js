import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import SearchBox from "./SearchBox";

const TopBar = () => {
  const [expanded, setExpanded] = useState(true);

  const containerTailwindStyles =
    "w-full bg-accent1 text-xl text-white p-12 flex flex-col place-content-center shadow-xl";

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <motion.div
      animate={expanded ? { height: "100%" } : { height: "auto" }}
      className={`${containerTailwindStyles}`}
    >
      <Logo />
      <div className="h-full grid place-items-center">
        <SearchBox />
      </div>
    </motion.div>
  );
};

export default TopBar;
