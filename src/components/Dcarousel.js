// import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import "./DCarousel.scss";
import CarouselG from "./CarouselG";

function Dcarousel() {
  let cards = [
    {
      key: uuidv4(),
      content: <Card imagen="/images/Rectangle_2092.png" />,
    },
    {
      key: uuidv4(),
      content: <Card imagen="/images/Rectangle_2093.png" />,
    },
    {
      key: uuidv4(),
      content: <Card imagen="/images/Rectangle_2094.png" />,
    },
    {
      key: uuidv4(),
      content: <Card imagen="/images/Rectangle_2084.png" />,
    },
    {
      key: uuidv4(),
      content: <Card imagen="/images/Rectangle_2091.png" />,
    },
  ];
  return (
    <div className="cardss">
      <CarouselG
        cards={cards}
        height="500px"
        width="50%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default Dcarousel;
