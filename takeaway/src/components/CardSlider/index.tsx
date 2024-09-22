import { useRef } from "react";
import Card from "../Card";

import "./style.css";

const Slider = ({inputChar}) => {

  const handelScroll = (event) => {
    const { scrollTo, scrollLeft } = event.target
    console.log(scrollTo);
  };

  return (
    <div onScroll={handelScroll} className="slider-container">
      {inputChar.map((item, index) => (
              <Card
              key={index}
              inputChar={inputChar}
              cardNumber={item.number}
              cardBank={item.name}
              isActive={false}
              onActive={() => {}}
              className="user-card"
            />
      ))}
    </div>
  );
};

export default Slider;
