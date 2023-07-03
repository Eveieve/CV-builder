import Name from "./Name";
import { useState } from "react";

function App() {
  const [state, setState] = useState({
    name: "hi",
    position: "",
  });

  // function to handle change to the input and update the state accordingly

  return <Name value={state.name}></Name>;
}

export default App;
