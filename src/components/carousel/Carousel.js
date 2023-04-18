import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    dotClassName: "slick-dots line_indicator",
  };
  return (
    <Slider {...settings}>
      <div className="carousel">
        <img src="/images/hero_carousel.png" alt="carousel" />
        <article className="content">
          <h4>Are you Hungry?</h4>
          <p>Get your Hunger Satisfied In Minutes</p>
          <ol>
            <li>1. Select any dish from 1000 Local and Foreign meals </li>
            <li>2. Make Payments</li>
            <li>3. Get your meal delivered to your comfort </li>
          </ol>
          <button> Place Order</button>
          <div className="images">
            <img src="/images/playstore.png" alt="download" />
            <img src="/images/appstore.png" alt="download" />
          </div>
        </article>
      </div>
      <div className="carousel">
        <img src="/images/hero_carousel.png" alt="carousel" />
        <article className="content">
          <h4>Are you Hungry?</h4>
          <p>Get your Hunger Satisfied In Minutes</p>
          <ol>
            <li>1. Select any dish from 1000 Local and Foreign meals </li>
            <li>2. Make Payments</li>
            <li>3. Get your meal delivered to your comfort </li>
          </ol>
          <button> Place Order</button>
          <div className="images">
            <img src="/images/playstore.png" alt="download" />
            <img src="/images/appstore.png" alt="download" />
          </div>
        </article>
      </div>
      <div className="carousel">
        <img src="/images/hero_carousel.png" alt="carousel" />
        <article className="content">
          <h4>Are you Hungry?</h4>
          <p>Get your Hunger Satisfied In Minutes</p>
          <ol>
            <li>1. Select any dish from 1000 Local and Foreign meals </li>
            <li>2. Make Payments</li>
            <li>3. Get your meal delivered to your comfort </li>
          </ol>
          <button> Place Order</button>
          <div className="images">
            <img src="/images/playstore.png" alt="download" />
            <img src="/images/appstore.png" alt="download" />
          </div>
        </article>
      </div>
      <div className="carousel">
        <img src="/images/hero_carousel.png" alt="carousel" />
        <article className="content">
          <h4>Are you Hungry?</h4>
          <p>Get your Hunger Satisfied In Minutes</p>
          <ol>
            <li>1. Select any dish from 1000 Local and Foreign meals </li>
            <li>2. Make Payments</li>
            <li>3. Get your meal delivered to your comfort </li>
          </ol>
          <button> Place Order</button>
          <div className="images">
            <img src="/images/playstore.png" alt="download" />
            <img src="/images/appstore.png" alt="download" />
          </div>
        </article>
      </div>
    </Slider>
  );
}
