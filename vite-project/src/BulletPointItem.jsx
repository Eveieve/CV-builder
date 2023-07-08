// represents bulletPoints array key for each educationItem(object)
// id is the bulletPointItem object's id

// can I update the whole state object from here as well?
import { useState } from "react";

function BulletPointItem({ setState, state, bulletPointItem, id, onChange }) {
  // console.log(state);
  // console.log(useState(state));
  console.log(setState);
  // const [state, setState] = useState(state);

  function updateStateOnChange(e) {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      educations: {
        ...prevState.educations,
        ...prevState.educations.bulletPoints,
        [name]: value,
      },
    }));
  }
  return (
    <>
      <input
        placeholder="bullet point"
        name="title"
        value={bulletPointItem.title} // there's a 'title' key in bulletPointItem object
        onChange={updateStateOnChange}
      />
    </>
  );
}

export default BulletPointItem;
