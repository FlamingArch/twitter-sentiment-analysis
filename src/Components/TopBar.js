import React, { useContext } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import { SearchContext } from "./SearchContext";
import bg from "../Resources/bg.jpg";

const TopBar = () => {
  const [, , , empty] = useContext(SearchContext);

  // const imgUrl = "https://unsplash.com/photos/FdDkfYFHqe4/download?force=true";
  const imgUrl = bg;

  const containerTailwindStyles =
    "h-full w-full bg-black text-xl text-white flex flex-col place-content-center shadow-xl relative";

  return (
    <motion.div
      animate={empty ? { height: "100%" } : { height: "224px" }}
      className={`${containerTailwindStyles}`}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
      }}
    >
      <motion.div
        animate={
          empty
            ? {
                backgroundColor: "#0004",
              }
            : {
                backgroundColor: "#000A",
                backdropFilter: "blur(2rem)",
                WebkitBackdropFilter: "blur(2rem)",
              }
        }
        className="w-full h-full p-12"
        style={{ overflow: "hidden" }}
      >
        <Logo />
        <div className="h-full grid place-items-center">
          <SearchBox />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TopBar;

// https://unsplash.com/photos/FdDkfYFHqe4/download?force=true
