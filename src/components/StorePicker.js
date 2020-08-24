import React from "react";
import { getFunName } from "../helper";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    // 1. Stop the form from submitting
    event.preventDefault();

    // 2. get the text from the input
    const store_name = this.myInput.current.value;
    // 3. change the page to the path you want to navigate i.e /store/whatever you from the input
    this.props.history.push(`/store/${store_name}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button>Visit Store --&gt; </button>
      </form>
    );
  }
}

export default StorePicker;
