import "./App.css";
import Header from "./Header.jsx";
import { useState } from "react";
import Section from "./Section.jsx";

function App() {
  const [state, setState] = useState({
    name: "",
    title: "",
    address: "",
    phone: "",
    email: "",
    linkedIn: "",
    gitHub: "",
  });
  console.log(state);
  // function to handle change to the input and update the state accordingly
  // [e.target.name] - setting the key , computed key
  function handleChange(e) {
    setState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }

  // function for ultimately saving the state => pdf!
  // passing in values for custom components' props
  return (
    <>
      <input onChange={handleChange} name="name" value={state.name} />
      <input onChange={handleChange} name="title" value={state.title} />
      <br />
      <input
        className="address"
        onChange={handleChange}
        name="address"
        value={state.address}
      />
      <input
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={state.email}
      />

      <input
        placeholder="Phone"
        onChange={handleChange}
        name="phone"
        value={state.phone}
      />

      <input
        placeholder="LinkedIn"
        onChange={handleChange}
        name="linkedIn"
        value={state.linkedIn}
      />
      <input
        placeholder="GitHub"
        onChange={handleChange}
        name="gitHub"
        value={state.gitHub}
      />
      <Section sectionName="PROJECTS" />
    </>
  );
}

export default App;
