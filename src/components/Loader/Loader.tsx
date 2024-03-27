import React from "react";

import { LoaderProps } from "./types";
import "./styles.sass";

const Loader: React.FC<LoaderProps> = ({ show, imgSrc }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="loader__container">
      <div className="loader__spinner_container">
        <span className="loader"></span>
      </div>
    </div>
  );
};

export default Loader;
