import "./App.css";
import Header from "./Header.jsx";
import { useState } from "react";
import Section from "./Section.jsx";
import BulletPoint from "./BulletPoint.jsx";

function App() {
  const [state, setState] = useState({
    name: "",
    title: "",
    address: "",
    phone: "",
    email: "",
    linkedIn: "",
    gitHub: "",
    projects: {
      bulletPoint: "",
    },
    experience: {
      bulletPoint: "",
    },
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

  function handleProjectsChange(e) {
    setState((prevState) => {
      return {
        ...prevState,
        projects: {
          ...prevState.projects,
          [e.target.name]: e.target.value,
        },
      };
    });
  }

  function handleExperienceChange(e) {
    setState((prevState) => {
      return {
        ...prevState,
        experience: {
          ...prevState.experience,
          [e.target.name]: e.target.value,
        },
      };
    });
  }
  // function for ultimately saving the state => pdf!
  // passing in values for custom components' props
  return (
    <>
      <input
        placeholder="Name"
        onChange={handleChange}
        name="name"
        value={state.name}
      />
      <input
        placeholder="Title"
        onChange={handleChange}
        name="title"
        value={state.title}
      />
      <br />
      <input
        placeholder="Address"
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
      <Section sectionName="TECHNICAL SKILLS" />
      <Section sectionName="PROJECTS" />
      <input
        placeholder="Bullet Point"
        onChange={handleProjectsChange}
        name="bulletPoint"
        value={state.projects.bulletPoint}
      />
      <Section sectionName="EXPERIENCE" />
      <input
        placeholder="Bullet Point"
        onChange={handleExperienceChange}
        name="bulletPoint"
        value={state.experience.bulletPoint}
      />
    </>
  );
}

export default App;
