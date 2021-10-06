import React, { useState } from "react";
import { motion } from "framer-motion";
import searchIcon from "../Resources/search-line.svg";

const SearchBox = (props) => {
  const [empty, setEmpty] = useState(true);
  const [inputType, setInputType] = useState("none");
  const [query, setQuery] = useState("");

  const onTextChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setEmpty(true);
    } else setEmpty(false);

    if (value[0] === "#") {
      setInputType("hashtag");
    } else if (value[0] === "@") {
      setInputType("user");
    } else setInputType("none");

    setQuery(value);
    props.onChange(value);
  };

  const onTextSubmit = (e) => {
    props.onSubmit(query);
  };

  return (
    <div
      className="rounded-md shadow-xl bg-white flex"
      style={{ width: "384px", height: "36px" }}
    >
      <motion.img
        animate={empty ? { opacity: 0.6 } : { opacity: 1 }}
        src={searchIcon}
        className="h-full"
        style={{ padding: "0.64rem 0" }}
        alt=""
      />
      <div className="relative w-full  py-2">
        <motion.p
          animate={empty ? { opacity: 0.6 } : { opacity: 0 }}
          className="text-sm text-black"
        >
          Enter <span className="text-accent2">#hashtag</span> or{" "}
          <span className="text-accent1">@username</span>
        </motion.p>
        <motion.input
          animate={
            inputType === "none"
              ? { color: "black" }
              : inputType === "hashtag"
              ? { color: "var(--color-accent2)" }
              : { color: "var(--color-accent1)" }
          }
          className="absolute bg-opacity-0 h-full text-sm text-black bg-transparent w-full top-0 left-0 right-0 bottom-0 border-none focus:border-opacity-0"
          type="text"
          name=""
          id=""
          value={query}
          onChange={onTextChange}
        />
      </div>
      <button
        onClick={onTextSubmit}
        className="bg-accent1 text-sm px-4 m-1 rounded-md shadow-lg"
      >
        Go
      </button>
    </div>
  );
};

export default SearchBox;
