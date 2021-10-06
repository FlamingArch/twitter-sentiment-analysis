import React from "react";
import twitterIcon from "../Resources/twitter-line.svg";

const Logo = () => {
  return (
    <div className="flex flex-row">
      <img src={twitterIcon} className="pr-4 w-16 h-16" alt="" />
      <p style={{ color: "white", width: "100px", lineHeight: 1, zIndex: 2 }}>
        Twitter Sentiment Analysis
      </p>
    </div>
  );
};

export default Logo;
