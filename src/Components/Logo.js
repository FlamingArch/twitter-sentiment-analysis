import React, { useContext } from "react";
import { SearchContext } from "./Context";
import twitterIcon from "../Resources/twitter-line.svg";

const Logo = () => {
  const [searchTerm, , , empty] = useContext(SearchContext);

  return (
    <div className="flex flex-row place-items-center">
      <img src={twitterIcon} className="pr-4 w-16 h-16" alt="" />
      <p style={{ color: "white", width: "100px", lineHeight: 1, zIndex: 2 }}>
        Twitter Sentiment Analysis
      </p>
      {!empty && (
        <p className="w-full text-sm text-right">Search Term: {searchTerm}</p>
      )}
    </div>
  );
};

export default Logo;
