import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

const Product = ({ item }) => {
  return (
    <div>
      <div className="parent3">
        <div className="div12">
          <div className="box1">
            <div>
              <img src={item.img} alt="" />
            </div>

            <div className="sub">
              <div className="upper-text1">
                <span className="side1">{item.price}</span>
                {item.price1}
              </div>

              <div className="text1">
                <span className="pehla">{item.title}</span>
              </div>

              <div className="lower1">
                <ShoppingCartOutlined fontSize="medium" />
                &nbsp;{" "}
                <Link className="buy" to={`/product/${item.id}`}>
                  Buy Now
                </Link>
                <FavoriteBorderOutlined fontSize="medium" className="icon1" />
                {/* <h6><span className="icon1">(4.5)</span></h6> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
