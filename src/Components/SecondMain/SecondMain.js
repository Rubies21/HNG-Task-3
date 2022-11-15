import React from "react";
import "./SecondMain.css";
import Images from "../Images/Images.js";
import Place1 from "../../assets/Place1.svg";
import Place2 from "../../assets/Place2.svg";
import Place3 from "../../assets/Place3.svg";
import Place4 from "../../assets/Place4.svg";
import Place5 from "../../assets/Place5.svg";
import Place6 from "../../assets/Place6.svg";
import Place7 from "../../assets/Place7.svg";
import Place8 from "../../assets/Place8.svg";
const SecondMain = () => {
  return (
    <div style={{ paddingBottom: "50px" }}>
      <header>
        <p id="header-text">Inspiration for your next adventure</p>
      </header>

      <div className="image-places">
        <Images Place={Place1} />
        <Images Place={Place2} />
        <Images Place={Place3} />
        <Images Place={Place4} />
        <Images Place={Place5} />
        <Images Place={Place6} />
        <Images Place={Place7} />
        <Images Place={Place8} />
      </div>
    </div>
  );
};

export default SecondMain;
