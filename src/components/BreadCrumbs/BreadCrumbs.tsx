import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.sass";
import { BreadCrumbProps } from "./types";

const BreadCrumbs: React.FC<BreadCrumbProps> = ({ breadCrumbs }) => {
  const navigate = useNavigate();

  const renderBreadcrumbs = () => {
    return breadCrumbs.map((breadCrumb, index) => {
      const isLast = index === breadCrumbs.length - 1;

      const separator = isLast ? (
        ""
      ) : (
        <span className="breadCrumbs__crumb">{" > "}</span>
      );

      const crumb = (
        <span
          className={[
            "breadCrumbs__crumb",
            isLast ? "breadCrumbs__crumb_strong" : null,
          ].join(" ")}
          onClick={() => navigate(breadCrumb.href)}
        >
          {breadCrumb.name}
        </span>
      );

      return (
        <React.Fragment key={"breadCrumb" + breadCrumb.name}>
          {crumb}
          {separator}
        </React.Fragment>
      );
    });
  };

  return <div className="breadCrumbs__root">{renderBreadcrumbs()}</div>;
};

export default BreadCrumbs;
