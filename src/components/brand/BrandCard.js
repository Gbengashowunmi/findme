import React from 'react'
import { BsFillStarFill } from 'react-icons/bs';

export default function BrandCard() {
  return (
    <div className="product_wrapper brand">
      <section className="content">
        <img src="/images/logo.png" alt="" />
        <section className="title">
          <h3>Alamande & sons ltd</h3>
          <p>Shoe Maker </p>
        </section>
        <div className="rating">
          <BsFillStarFill className="yellow" />
          <BsFillStarFill className="yellow" />
          <BsFillStarFill className="yellow" />
          <BsFillStarFill className="yellow" />
          <BsFillStarFill className="grey" />
          (1028)
        </div>
        <p>
          Information about this business is lopesum about it and more knowledge
          experience if life ...
        </p>

        <button> Book</button>
      </section>
      <div className='image_wrapper'>
      <img src="/images/picture.png" alt="side" />
      </div>
    </div>
  );
}
