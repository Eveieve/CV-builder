import Name from "./Name.jsx";

import { useState } from "react";

function App() {
  const [state, setState] = useState({
    name: "",
    position: "",
  });
  console.log(state);
  // function to handle change to the input and update the state accordingly
  function handleChange(e) {
    setState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }
  // passing in values for custom components' props
  return (
    <>
      <Name onChange={handleChange} name="name" value={state.name} />
      <input onChange={handleChange} name="position" value={state.position} />
    </>
  );
}

export default App;
