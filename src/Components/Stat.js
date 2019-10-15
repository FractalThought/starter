import React from "react";

/*
  Vår funktionella komponent Stat
  Hämtar in stat som prop, och returnerar ett li-element
*/

function Stat({ stat }) {
  const myStyle = {
    color: stat.statsValue >= 10 ? "#FA1234" : "blue"
  };

  return (
    <li style={myStyle}>
      Your {stat.statsName} is {stat.statsValue}.
    </li>
  );
}

export default Stat;
