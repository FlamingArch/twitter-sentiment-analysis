import React, { useState, createContext } from "react";

export const SearchContext = createContext();

export const SearchProvider = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputType, setInputType] = useState("none");
  const [empty, setEmpty] = useState(false);

  const search = () => alert(searchTerm);

  const changeSearchTerm = (val) => {
    setSearchTerm(val);
    changeEmpty();
    changeInputType();
  };

  const changeEmpty = () => setEmpty(!searchTerm);

  const changeInputType = () => {
    searchTerm[0] === "#"
      ? setInputType("hashtag")
      : searchTerm[0] === "@"
      ? setInputType("user")
      : setInputType("none");
  };

  return (
    <SearchContext.Provider
      value={[searchTerm, changeSearchTerm, inputType, empty, search]}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
