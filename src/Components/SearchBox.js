import React, { useContext } from "react";
import { motion } from "framer-motion";
import searchIcon from "../Resources/search-line.svg";
import { SearchContext } from "./Context";

const SearchBox = () => {
  const [searchTerm, setSearchTerm, inputType, empty, search] =
    useContext(SearchContext);

  const onFormSubmit = (e) => {
    search();
    e.preventDefault();
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
      <form onSubmit={onFormSubmit} className="relative w-full  py-2">
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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <button
        type="submit"
        onClick={onFormSubmit}
        className="bg-accent1 text-sm px-4 m-1 rounded-md shadow-lg"
      >
        Go
      </button>
    </div>
  );
};

export default SearchBox;
