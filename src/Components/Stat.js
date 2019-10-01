import React from "react";

function Stat({ stat }) {
  return (
    <li>
      Your {stat.statsName} is {stat.statsValue}.
    </li>
  );
}

export default Stat;
