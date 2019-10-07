import React from "react";

/*
  Vår funktionella komponent Stat
  Hämtar in stat som prop, och returnerar ett li-element
*/
function Stat({ stat }) {
  return (
    <li>
      Your {stat.statsName} is {stat.statsValue}.
    </li>
  );
}

export default Stat;
