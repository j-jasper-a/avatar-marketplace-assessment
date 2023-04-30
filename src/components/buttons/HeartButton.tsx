import { useState } from "react";
import { BsSuitHeart, BsHeartFill } from "react-icons/bs";

const HeartButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  return (
    <button
      className="text-lg text-neutral-800"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      {isHovered ? <BsHeartFill className="text-red-500" /> : <BsSuitHeart />}
    </button>
  );
};

export default HeartButton;
