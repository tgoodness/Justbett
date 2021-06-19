import React from "react";
import Header from "./Header";
import blackRibbon from "../../assets/home/black-ribbon.png";

function PageView({ children, ...rest }) {
  return (
    <div {...rest}>
      <div className="container">
        <Header />
      </div>
      <div className="container mt-5">{children}</div>
      <div className="fixed-bottom ribbon">
        <img src={blackRibbon} alt="Black Ribbon" />
      </div>
    </div>
  );
}

export default PageView;
