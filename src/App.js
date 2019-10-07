import React from "react";
import "./App.css";
import Stat from "./Components/Stat"; // Importera komponenten Stat från Components-foldern

function App() {
  /*
    Skapar ett objekt som håller i vår karaktär
    Namn: "string"
    Age: number
    Race: "string"
    Traits: []
    Stats: [{StatsName, StatsValue}]
  */

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

  /*
    Return är det som skrivs ut på sidan
    Det som returneras är JSX, och vi behöver returnera ett huvudelement
    (i det här fallet <div className="App"></div>)
  */
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
        {/* (så här kommenterar vi i JSX) */}
        {/*
          Använder komponenten Stat och skickar med attributet (prop) stat
        */}
        <Stat stat={character.stats[0]}></Stat>
        <Stat stat={character.stats[1]}></Stat>
        <Stat stat={character.stats[2]}></Stat>
      </ul>
    </div>
  );
}

// Export gör att funktionen går att komma åt från andra filer
export default App;
