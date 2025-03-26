import React from "react";
import f1 from "../../images/f1.jpg";
import f2 from "../../images/f2.jpg";
import f3 from "../../images/f3.jpg";
import f4 from "../../images/f4.jpg";
import f5 from "../../images/f5.jpg";
import f6 from "../../images/f6.jpg";

function FlashSale() {
  return (
    <div>
      <h1>Flash Sale</h1>
      <div className="flex flex-wrap">
        <img src={f1} alt="" />
      </div>
      <div className="flex flex-wrap">
        <img src={f2} alt="" />
      </div>
      <div className="flex flex-wrap">
        <img src={f3} alt="" />
      </div>
      <div>
        <img src={f4} alt="" />
      </div>
      <div>
        <img src={f5} alt="" />
      </div>
      <div>
        <img src={f6} alt="" />
      </div>
    </div>
  );
}

export default FlashSale;
