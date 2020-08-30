import React from "react";
import PropTypes from "prop-types";

const AddFishForm = (props) => {
  const nameRef = React.createRef();
  const priceRef = React.createRef();
  const statusRef = React.createRef();
  const descRef = React.createRef();
  const imageRef = React.createRef();

  const createFish = (event) => {
    event.preventDefault();
    const fish = {
      name: nameRef.current.value,
      price: parseFloat(priceRef.current.value),
      satus: statusRef.current.value,
      desc: descRef.current.value,
      image: imageRef.current.value,
    };
    props.addFish(fish); // function from the parent component
    event.currentTarget.reset(); // clear the form input field
  };

  return (
    <form className="fish-edit" onSubmit={createFish}>
      <input type="text" ref={nameRef} name="name" placeholder="Name" />
      <input type="text" ref={priceRef} name="price" placeholder="Price" />
      <select ref={statusRef} name="status">
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea ref={descRef} name="desc" placeholder="Description" />
      <input type="text" ref={imageRef} name="image" placeholder="Image" />
      <button type="submit">+ Add Fish</button>
    </form>
  );
};

AddFishForm.propTypes = {
  addFish: PropTypes.func,
};

export default AddFishForm;
