import React from "react";

import "./styles.sass";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({
  imgSrc,
  title,
  description,
  rightLabel,
  onClick = () => {},
}) => {
  return (
    <div className="card__root" onClick={onClick}>
      <div
        className="card__image_container"
        style={{ backgroundImage: `url(${imgSrc})` }}
      />
      <div className="card__data">
        <div className="card__data_leftContent">
          <h2>{title}</h2>
          <div>{description}</div>
        </div>
        {rightLabel && (
          <div className="card__data_rightLabel">{rightLabel}</div>
        )}
      </div>
    </div>
  );
};

export default Card;
