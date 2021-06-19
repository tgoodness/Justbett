import React from "react";
import Header from "./Header";
import "../style/home/pageview.scss";

import yellowRibbon from "../../assets/home/yellow-ribbon.png";
import blackRibbon from "../../assets/home/black-ribbon.png";

function PageView({ children }) {
  return (
    <div className="home">
      <div className="container">
        <Header />
      </div>
      <div>
        <div className="text-right">
          <img src={yellowRibbon} alt="Yellow Ribbon" />
        </div>
        <div className="container">{children}</div>
        <div className="ribbon">
          <img src={blackRibbon} alt="Black Ribbon" />
        </div>
      </div>
    </div>
  );
}

export default PageView;
