import { BsThreeDotsVertical } from "react-icons/bs";
import "./popularBusiness.scss"
;
export default function PopularBusiness({image,}) {
  return (
    <div className="nearby popular_business">
      <BsThreeDotsVertical className="menu" />
      <div className="image">
        <img src={image} alt="near_by" />
      </div>
      <div className="info">
        <div className="user_info">
          <div className="username">
            <span>
              <h4>John Hummer</h4>
              <img src="/images/verify.png" alt="verify" className="verify" />
            </span>
            <p className="grey">Delivery Services</p>
          </div>
        </div>
        <div className="distance_book">
          <span className="grey">
            UYO - Nigeria
          </span>
        </div>
      </div>
    </div>
  );
}
