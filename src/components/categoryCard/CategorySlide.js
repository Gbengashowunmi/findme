import React from 'react'
import Slider from "react-slick";
import Category from './Category';

export default function CategorySlide() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8.5,
        slidesToScroll: 1,
      };
  return (
      <Slider {...settings}>
        <div className='card'>
          <Category image="/images/car_cartegory.png" name="Transport" />
        </div>
        <div className='card'>
          <Category image="/images/delivery.png" name="delivery" />
        </div>
        <div className='card'>
          <Category image="/images/food.png" name="Food" />
        </div>
        <div className='card'>
          <Category image="/images/business.png" name="Business" />
        </div>
        <div className='card'>
          <Category image="/images/service.png" name="Service" />
        </div>
        <div className='card'>
          <Category image="/images/market.png" name="Market Place" />
        </div>

        <div className='card'>
          <Category image="/images/admin.png" name="Administration" />
        </div>
        <div className='card'>
          <Category image="/images/agric.png" name="Agriculture" />
        </div>
        <div className='card'>
          <Category image="/images/art.png" name="Art" />
        </div>
      </Slider>
      );
}
