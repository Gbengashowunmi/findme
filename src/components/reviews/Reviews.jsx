import { Icon } from "@iconify/react";
import "./reviews.scss"


export default function Reviews() {
  return (
    <div className="review_wrapper">
      <div className="reviewer">
        <div className="image">
          <img src="/images/Rectangle 1669.png" alt="" />
        </div>
        <div className="username_date">
          <h5>Johnny Fred</h5>
          <p className="date">4 weeks</p>
        </div>
        <div className="ratings">
          <Icon icon="material-symbols:star-rounded" color="#ffc400" />
        </div>
      </div>

      <p className="review">
        Launch and manage your physical and online business or service in FindMe
        Business app get verified and let customers find you in minutes with
        world wide visibility powered by multiverse technology.
      </p>
    </div>
  );
}
