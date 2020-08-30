import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./css/App.css";
import Header from "./components/Header";
import Order from "./components/Order";
import Inventory from "./components/Inventory";
import Fish from "./components/Fish";
import sampleFishes from "./sample-fishes";
import base from "./base";

function App(props) {
  const { params } = props.match;
  const [fishes, setFishes] = useState({});
  const [order, setOrder] = useState(
    JSON.parse(localStorage.getItem(params.storeId)) || {}
  );

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

  const updateFish = (key, updatedFish) => {
    const updatedFishes = { ...fishes, [key]: updatedFish };
    setFishes(updatedFishes);
    base.post(`${params.storeId}/fishes`, {
      data: updatedFishes,
    });
  };

  const deleteFish = (key) => {
    const updatedFishes = { ...fishes, [key]: null };
    setFishes(updatedFishes);
    base.post(`${params.storeId}/fishes`, {
      data: updatedFishes,
    });
  };

  const addToOrder = (key) => {
    const spreadOrder = { ...order };
    spreadOrder[key] = spreadOrder[key] + 1 || 1;
    setOrder({ ...spreadOrder });
  };

  const deleteOrder = (key) => {
    const orders = { ...order };
    delete orders[key];
    setOrder(orders);
  };

  // Load Sample Fishes
  const loadSampleFishes = () => {
    setFishes({ ...fishes, ...sampleFishes });
    base.post(`${params.storeId}/fishes`, {
      data: { ...fishes, ...sampleFishes },
    });
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
      <Order fishes={fishes} order={order} deleteOrder={deleteOrder} />
      <Inventory
        addFish={addFish}
        updateFish={updateFish}
        deleteFish={deleteFish}
        loadSampleFishes={loadSampleFishes}
        fishes={fishes}
      />
    </div>
  );
}

App.prototype = {
  match: PropTypes.object,
};

export default App;
