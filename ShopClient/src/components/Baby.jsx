import React from 'react'
import './Baby.css'
import { Link } from "react-router-dom";
import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

const Baby = ({item}) => {
  return (
    <div>
      
      
     
       <div className="parent3">
      <div className="div12">
      <div className="box1">
      <div>
        <img
          src={item.img} alt=""/>
         {/* <div className="verticle">
         OFF 50%
      </div> */}
      </div>
     
      <div className="sub">
        <div className="upper-text">
          <span className="side1">{item.price}</span>
          {item.price1}
        </div>

        <div className="text1">
          <span className="pehla">Nike Sportswear Storm-FIT </span>
          <span className="dosra">Windrunner</span>
        </div>

        <div className="lower1">
          <ShoppingCartOutlined fontSize="medium" />
          &nbsp; 
          <Link className="buy" to={`/product/${item.id}`}>
                  Buy Now
                </Link>
          <FavoriteBorderOutlined fontSize="medium" className="icon1" />
        </div>
      </div>
    </div>
</div>
      </div>
    </div>
  )
}

export default Baby