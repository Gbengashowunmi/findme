import "./customebar.scss";

const CustomScrollbar = ({ onClick, ...rest }) => {
  const {
    // onMove,
    // index,
    active,
    // carouselState: { currentSlide, deviceType },
  } = rest;
  // active is provided by this lib for checking if the item is active or not.
  return (
    <div className="scroll">
        <button
          className={active ? "custom_dot_active" : "custom_dot_inactive"}
          onClick={() => onClick()}></button>
    </div>
  );
};

export default CustomScrollbar;
