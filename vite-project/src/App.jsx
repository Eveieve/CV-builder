import "./App.css";
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import { useState } from "react";
import Section from "./Section.jsx";
import Projects from "./Projects";
import uniqid from "uniqid";

function App() {
  const [state, setState] = useState({
    name: "",
    title: "",
    address: "",
    phone: "",
    email: "",
    linkedIn: "",
    gitHub: "",
    techSkills: {
      skills: "",
    },
    projects: [
      {
        title: "",
        bulletPoint: "",
        id: uniqid(),
      },
    ],

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

  function handleTechSkillsChange(e) {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      techSkills: {
        ...prevState.techSkills,
        [name]: value,
      },
    }));
  }

  function handleProjectsChange(e, id) {
    const { name, value } = e.target;
    console.log(id);
    setState((prevState) => {
      const newProjects = prevState.projects.map((projectItem) => {
        if (projectItem.id === id) {
          // copy all other keys in projectItem entity
          console.log(projectItem);
          // return a new projectItem entity with the updated key:value
          return { ...projectItem, [name]: value };
        }
        return projectItem;
      });
      return { ...prevState, projects: [...newProjects] };
    });
  }

  function handleAddProject() {
    setState((prevState) => ({
      ...prevState,
      projects: [
        ...prevState.projects,
        {
          title: "",
          bulletPoint: "",
          id: uniqid(),
        },
      ],
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
      <Personal onChange={handleChange} />
      <Section sectionName="TECHNICAL SKILLS" />
      <textarea
        onChange={handleTechSkillsChange}
        name="skills"
        value={state.techSkills.skills}
      />
      <Section sectionName="PROJECTS" />
      <Projects
        state={state.projects}
        onChange={handleProjectsChange}
        projects={state.projects}
      />
      <button onClick={handleAddProject}>Add project</button>
      <Section sectionName="EXPERIENCE" />
      <Experience onChange={handleExperienceChange} />
      <Section sectionName="EDUCATION" />
      <Education onChange={handleEducationChange} />
      <Section sectionName="VOLUNTEER & INTERESTS" />
    </>
  );
}

export default App;
