import React from 'react'
import "./nearby.scss";
import { BsFillStarFill, BsThreeDotsVertical } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";


export default function Nearby({image}) {
  return (
    <div className="nearby">
      <BsThreeDotsVertical className="menu" />
      <div className="image">
        <img src={image} alt="near_by" />
      </div>
      <div className="info">
        <div className="user_info">
          <img src="/images/Rectangle 2933.png" alt="user" />
          <div className="username">
            <span>
              <h4>John Hummer</h4>
              <img src="/images/verify.png" alt="verify" className='verify' />
            </span>
            <p>Driver</p>
            <div className="rating">
              <BsFillStarFill className="yellow" />
              <BsFillStarFill className="yellow" />
              <BsFillStarFill className="yellow" />
              <BsFillStarFill className="yellow" />
              <BsFillStarFill className="grey" />
              (1028)
            </div>
          </div>
        </div>
        <div className="distance_book">
          <span> <IoLocationSharp className="location"/>14KM away</span>
          <button>Book</button>
        </div>
      </div>
    </div>
  );
}
