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
    education: {
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
    // unpacking the target element's name , value key
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      projects: {
        ...prevState.projects,
        [name]: value,
      },
    }));
  }

  function handleExperienceChange(e) {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        experience: {
          ...prevState.experience,
          [name]: value,
        },
      };
    });
  }

  function handleEducationChange(e) {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        education: {
          ...prevState.education,
          [name]: value,
        },
      };
    });
  }

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
        placeholder="Company"
        onChange={handleExperienceChange}
        name="company"
        value={state.experience.company}
      />
      <input
        placeholder="Aug 20'- Mar 25'"
        onChange={handleEducationChange}
        name="name"
        value={state.education.name}
      />
      <br />
      <input
        placeholder="Title"
        onChange={handleExperienceChange}
        name="title"
        value={state.experience.title}
      />
      <br />▪{" "}
      <input
        placeholder="Bullet Point"
        onChange={handleExperienceChange}
        name="bulletPoint"
        value={state.experience.bulletPoint}
      />
      <Section sectionName="EDUCATION" />
      <input
        placeholder="Name"
        onChange={handleEducationChange}
        name="name"
        value={state.education.name}
      />
      <input
        placeholder="Aug 20'- Mar 25'"
        onChange={handleEducationChange}
        name="name"
        value={state.education.name}
      />
      <br />
      <input
        placeholder="Bsc. Computer Science"
        onChange={handleEducationChange}
        name="name"
        value={state.education.name}
      />
      <br />
      <input
        placeholder="Bullet Point"
        onChange={handleEducationChange}
        name="bulletPoint"
        value={state.education.bulletPoint}
      />
      <Section sectionName="VOLUNTEER & INTERESTS" />
    </>
  );
}

export default App;
