import React from "react";
import { formatPrice } from "../helper";

const Fish = (props) => {
  const { name, image, price, desc, status } = props.fishObj;
  const isAvailable = status === "available";

  const handleClick = () => {
    props.addToOrder(props.index);
  };
  return (
    <li className="single-fish">
      <img src={image} alt={name} />
      <h3 className="fish-name">
        {name}
        <span className="price">{formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
      <button disabled={!isAvailable} onClick={handleClick}>
        {isAvailable ? "Add To Order" : "Sold Out!"}
      </button>
    </li>
  );
};

export default Fish;
