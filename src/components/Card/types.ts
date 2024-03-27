import React from "react";
export interface CardProps {
  imgSrc: string;
  title: React.ReactNode;
  description: React.ReactNode;
  rightLabel?: string;
  onClick?: () => void;
}
