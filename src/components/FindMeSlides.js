import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./findmeslides.scss";
import CustomScrollbar from "./multi-carousel/CustomScrollbar";

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

export default function FindMeSlides() {
  return (
    <Carousel
      showDots={true}
      customDot={<CustomScrollbar />}
      responsive={responsive}
      autoPlay={true}
      customTransition="transform 1000ms ease-in-out"
      transitionDuration={2000}
      // shouldResetAutoplay={true}
      // renderDotsOutside={true}
      rewind={true}
      // autoPlaySpeed={3000}
      // infinite={true}
      arrows={false}
      // additionalTransfrom={8}
      className="horizontalslider">
      <div className="item">
        <img src="/images/Group_5862.png" alt="findme_slide1" />
      </div>
      <div className="item">
        <img src="/images/Group 5745.png" alt="findme_slide2" />
      </div>
      <div className="item">
        <img src="/images/Group 5759.png" alt="findme_slide3" />
      </div>
    </Carousel>
  );
}
