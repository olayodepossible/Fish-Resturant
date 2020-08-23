import React from "react";
import "./css/App.css";
// import StorePicker from "./components/StorePicker";
import Header from "./components/Header";
import Order from "./components/Order";
import Inventory from "./components/Inventory";

function App() {
  return (
    <div className="catch-of-the-day">
      <div className="menu">
        <Header tagline="Fresh Seafood Market" />
      </div>
      <Order />
      <Inventory />
      {/* <StorePicker /> */}
    </div>
  );
}

export default App;
