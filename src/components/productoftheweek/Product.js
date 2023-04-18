import "./product.scss";
import { FiShoppingCart } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Icon } from "@iconify/react";

export default function Product({image}) {
  return (
    <div className="product">
      <BsThreeDotsVertical className="menu" />
      <div className="image">
        <img src={image} alt="near_by" />
      </div>
      <div className="info">
        <div className="user_info name_cart">
          <h4>ATV</h4>
          <div className="username name_cart">
            <Icon icon="ph:shopping-cart-simple-bold" width="18" height="18" />
          </div>
        </div>
        <div className="user_info name_cart">
          <h4 className="grey">TESLA INC.</h4>
          <p className="green">$13,200</p>
        </div>
        <div className="distance_book delivery_period">
          <p className="blue"> 2 days delivery </p>
          <img src="/images/Group 4772.png" alt="3_squares" />
        </div>
        <hr/>
      </div>
    </div>
  );
}
