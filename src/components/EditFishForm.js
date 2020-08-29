import React from "react";

const EditFishForm = (props) => {
  const handleChange = (event) => {
    const updatedFish = {
      ...props.fish,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    props.updateFish(props.index, updatedFish);
  };
  return (
    <div className="fish-edit">
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={props.fish.className}
      />
      <input
        type="text"
        name="price"
        onChange={handleChange}
        value={props.fish.price}
      />
      <select
        type="text"
        name="status"
        onChange={handleChange}
        value={props.fish.status}
      >
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea
        name="desc"
        onChange={handleChange}
        value={props.fish.desc}
      ></textarea>
      <input
        type="text"
        name="image"
        onChange={handleChange}
        value={props.fish.image}
      />
      <button onClick={() => props.deleteFish(props.index)}>Remove Fish</button>
    </div>
  );
};

export default EditFishForm;
