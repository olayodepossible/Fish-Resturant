import React, { useState, useEffect } from "react";
import "./css/App.css";
import Header from "./components/Header";
import Order from "./components/Order";
import Inventory from "./components/Inventory";
import Fish from "./components/Fish";
import sampleFishes from "./sample-fishes";
import base from "./base";

function App(props) {
  const [fishes, setFishes] = useState({});
  const [order, setOrder] = useState({});
  const params = props.match;

  useEffect(() => {
    const ref = base.syncState(`${params.storeId}/fishes`, {
      context: {
        setState: ({ fishes }) => setFishes({ ...fishes }),
        state: { fishes },
      },
      state: "fishes",
    });

    return () => {
      base.removeBinding(ref);
    };
  }, []);

  const addFish = (fish) => {
    const spreadFishes = { ...fishes };
    spreadFishes["fish" + Date.now()] = fish;
    setFishes({ ...spreadFishes });
  };

  // Load Sample Fishes
  const loadSampleFishes = () => {
    setFishes({ ...fishes, ...sampleFishes });
    base.post(`${params.storeId}/fishes`, {
      data: { ...fishes, ...sampleFishes },
    });
  };

  const addToOrder = (key) => {
    const spreadOrder = { ...order };
    spreadOrder[key] = spreadOrder[key] + 1 || 1;
    setOrder({ ...spreadOrder });
  };

  return (
    <div className="catch-of-the-day">
      <div className="menu">
        <Header tagline="Fresh Seafood Market" />
        <ul className="fishes">
          {Object.keys(fishes).map((key) => (
            <Fish
              key={key}
              index={key}
              fishObj={fishes[key]}
              addToOrder={addToOrder}
            />
          ))}
        </ul>
      </div>
      <Order fishes={fishes} order={order} />
      <Inventory addFish={addFish} loadSampleFishes={loadSampleFishes} />
    </div>
  );
}

export default App;
