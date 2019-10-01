import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Stat from "./Components/Stat";

function App() {
  const character = {
    name: "Fractale",
    age: 29,
    race: "Dragonborn",
    traits: ["Nerdy", "Merciful", "Helpful"],
    stats: [
      { statsName: "Strength", statsValue: 5 },
      { statsName: "Agility", statsValue: 5 },
      { statsName: "Stamina", statsValue: 10 }
    ]
  };

  return (
    <div className="App">
      <h1>DnD Character Creator</h1>
      <p>
        {character.name} {character.age}
      </p>
      <h2>Traits</h2>
      <ul>
        <li>{character.traits[0]}</li>
        <li>{character.traits[1]}</li>
        <li>{character.traits[2]}</li>
      </ul>
      <ul>
        <Stat stat={character.stats[0]}></Stat>
        <Stat stat={character.stats[1]}></Stat>
        <Stat stat={character.stats[2]}></Stat>
      </ul>
    </div>
  );
}

export default App;
