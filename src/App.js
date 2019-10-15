import React from "react";
import "./App.css";
import Stat from "./Components/Stat"; // Importera komponenten Stat från Components-foldern

/*

  Ternary ✔
  Arrow function ✔
  Map ✔
  Callbacks ✔
  State (useState hook)
  Bubble up state
*/

/*
Ternary:
  Lägg till style först;
  <li style={{ color: "red" }}>
  <li style={{ color: stat.statsValue >= 10 ? "red" : "black" }}>
*/

/*
const () => { Do stuff here };
*/

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

  const handleClick = () => {
    alert("heeeej");
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
          Använder map-metoden för att skriva ut en Stat komponent för varje Stat i Stats-arrayen
          Använder en pil-funktion som callback
        */}
        {character.stats.map((stat, key) => {
          return <Stat key={key} stat={stat} />;
        })}
      </ul>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

// Export gör att funktionen går att komma åt från andra filer
export default App;
