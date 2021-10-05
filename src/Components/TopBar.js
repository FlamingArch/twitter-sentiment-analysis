import React, { useState } from "react";
import { motion } from "framer-motion";

const TopBar = () => {
  const [expanded, setExpanded] = useState(true);

  const containerTailwindStyles =
    "w-full bg-accent1 text-xl text-white p-12 flex flex-col place-content-center shadow-xl";

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <motion.div
      animate={expanded ? { height: "100%" } : { height: "auto" }}
      className={`${containerTailwindStyles}  ${
        expanded ? "h-full" : "h-auto"
      }`}
    >
      <p style={{ color: "white", width: "100px", lineHeight: 1 }}>
        Twitter Sentiment Analysis
      </p>
      <div className="h-full grid center">
        <button onClick={toggleExpand}>Toggle</button>
      </div>
    </motion.div>
  );
};

export default TopBar;
