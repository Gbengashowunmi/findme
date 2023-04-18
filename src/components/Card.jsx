import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card({ imagen }) {
  const [show, setShown] = useState(false);

//   const props3 = useSpring({
//     transform: show ? "scale(1.03)" : "scale(1)",
//     boxShadow: show
//       ? "0 0px 25px rgb(0 0 0 / 25%)"
//       : "0 2px 10px rgb(0 0 0 / 8%)",
//   });
  return (
    <animated.div
      className={Styles.card}
      //   style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}>
      <img src={imagen} alt="" />
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a,
        possimus eos qui distinctio accusamus esse, quod mollitia est, quo
        tempore hic quasi debitis deleniti.
      </p> */}
    </animated.div>
  );
}

export default Card;
