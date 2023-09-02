import React from "react";
import Icon from "../icons/Icon";

function Card({ player, markIcon, onPlay, index }) {
  let icon = <Icon />;
  if (player === "x" || player === "X") {
    icon = <Icon name="cross" />;
  } else if (player === "o" || player === "O") {
    icon = <Icon name="circle" />;
  }
  return (
    <div
      className="w-24 h-24 text-6xl bg-yellow-400 flex justify-center items-center rounded-xl"
      onClick={() => onPlay(index)}
    >
      {icon}
    </div>
  );
}

export default Card;
