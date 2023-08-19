import React from "react";
import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import "./Card.css";

const card = () => {
  return (
    <div className="box">
      <div>
        <img
          src="https://shop.activeitzone.com/public/uploads/all/o5rNBwXJJcv0QFLl2XD1T9UhTXLfFOlMAixnlGuG.png"
          alt=""
          
        />
         <div className="verticle">
         OFF 50%
      </div>
      </div>
     
      <div className="sub">
        <div className="upper-text">
          <span className="side"> $150.00</span>
          $150.00
        </div>

        <div className="text">
          <span className="pehla">Nike Sportswear Storm-FIT </span>
          <span className="dosra">Windrunner</span>
        </div>

        <div className="lower">
          <ShoppingCartOutlined fontSize="small" />
          &nbsp; Buy Now
          <FavoriteBorderOutlined fontSize="small" className="icon" />
        </div>
      </div>
    </div>



  );
};

export default card;
