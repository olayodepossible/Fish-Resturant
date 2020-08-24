import React, { useState } from "react";
import "./css/App.css";
// import StorePicker from "./components/StorePicker";
import Header from "./components/Header";
import Order from "./components/Order";
import Inventory from "./components/Inventory";
import Fish from "./components/Fish";
import sampleFishes from "./sample-fishes";

function App() {
  const [fishes, setFishes] = useState({});
  const addFish = (fish) => {
    const spreadFishes = { ...fishes };
    spreadFishes["fish" + Date.now()] = fish;
    setFishes({ ...spreadFishes });
  };

  // Load Sample Fishes
  const loadSampleFishes = () => {
    setFishes({ ...sampleFishes });
  };
  return (
    <div className="catch-of-the-day">
      <div className="menu">
        <Header tagline="Fresh Seafood Market" />
        <ul className="fishes">
          {Object.keys(fishes).map((key) => (
            <Fish key={key} fishObj={fishes[key]} />
          ))}
        </ul>
      </div>
      <Order />
      <Inventory addFish={addFish} loadSampleFishes={loadSampleFishes} />
    </div>
  );
}

export default App;
