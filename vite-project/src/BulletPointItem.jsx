// represents bulletPoints array key for each educationItem(object)
// id is the bulletPointItem object's id

// can I update the whole state object from here as well?
import { useState } from "react";

function BulletPointItem({ setState, state, bulletPointItem, id, onChange }) {
  // console.log(state);
  // console.log(useState(state));
  console.log(setState);
  // const [state, setState] = useState(state);

  // can you read a setState function from its parent?
  function handleChange(e) {
    onChange(e, id);
    console.log(bulletPointItem);
  }
  return (
    <>
      <input
        placeholder="bullet point"
        name="title"
        value={bulletPointItem.title} // there's a 'title' key in bulletPointItem object
        onChange={handleChange}
      />
    </>
  );
}

export default BulletPointItem;
