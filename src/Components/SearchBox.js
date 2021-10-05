import React, { useState } from "react";
import { motion } from "framer-motion";

const SearchBox = (props) => {
  const [empty, setEmpty] = useState(true);

  const onTextChange = (e) => {
    const value = e.target.value;
    if (value === "") setEmpty(true);
    else setEmpty(false);
    props.onChange(value);
  };

  return (
    <div
      className="rounded-md shadow-lg bg-white p-2 relative"
      style={{ width: "320px" }}
    >
      <motion.p
        animate={empty ? { opacity: 0.6 } : { opacity: 0 }}
        className="text-sm text-black"
      >
        Enter <span className="text-accent2">#hashtag</span> or{" "}
        <span className="text-accent2">@username</span>
      </motion.p>
      <input
        className="absolute bg-opacity-0 h-full p-2 text-sm text-black bg-transparent w-full top-0 left-0 right-0 bottom-0 border-none"
        type="text"
        name=""
        id=""
        onChange={onTextChange}
      />
    </div>
  );
};

export default SearchBox;
