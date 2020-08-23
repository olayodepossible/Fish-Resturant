import React from "react";

class StorePicker extends React.Component {
  render() {
    return (
      <form action="" className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button>Visit Store --&gt; </button>
      </form>
    );
  }
}

export default StorePicker;
