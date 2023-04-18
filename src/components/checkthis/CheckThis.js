import { BsThreeDotsVertical } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import "./checkthis.scss";

export default function CheckThis({image}) {
  return (
    <div className="checkthis">
      <BsThreeDotsVertical className="menu" />
<div className="checkthis_overlay"></div>
      <img src={image} alt="whats-new" />
        <div className="checkthis_content">
            <h3>MODEL</h3>
            <h6>ATV</h6>
        </div>
      <FiShoppingCart className="cart"/>
    </div>
  );
}
