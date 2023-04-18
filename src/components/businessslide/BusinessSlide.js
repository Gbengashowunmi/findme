import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "./findmeslides.scss";
// import CustomScrollbar from "./multi-carousel/CustomScrollbar";
import Plan from "../Plan";
import CustomScrollbar from "../multi-carousel/CustomScrollbar";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function BusinessSlide() {
  return (
    <Carousel
      showDots={true}
      customDot={<CustomScrollbar />}
      responsive={responsive}
      autoPlay={true}
      customTransition="transform 1000ms ease-in-out"
      transitionDuration={2000}
      shouldResetAutoplay={true}
      renderDotsOutside={true}
      rewind={true}
      autoPlaySpeed={1000}
      arrows={false}
      additionalTransfrom={8}
      className="horizontalslider">
      <div className="item">
        <div className="starter_plan">
          <h2>STARTER PLAN</h2>
        </div>
        <div className="plan_wrapper">
          <Plan header="BASIC" amount={1000} />
          <Plan header="STANDARD" amount={3000} />
          <Plan header="PREMIUM" amount={5000} />
        </div>
      </div>
      <div className="item">
        <div className="starter_plan">
          <h2>ENTERPRISE PLAN</h2>
        </div>
        <div className="plan_wrapper">
          <Plan header="ENTERPRISE" amount={10000} />
          <Plan header="ENTERPRISE 1" amount={50000} />
          <Plan header="ENTERPRISE 2" amount={10000} />
        </div>
      </div>
      <div className="item">
        <div className="starter_plan">
          <h2>INVESTMENT PLAN</h2>
        </div>
        <div className="plan_wrapper">
          <Plan header="BASIC ENTERPRISE" amount={50000} />
          <Plan header="STANDARD ENTERPRISE" amount={103000} />
          <Plan header="PREMIUM ENTERPRISE" amount={3000000} />
        </div>
      </div>
    </Carousel>
  );
}
