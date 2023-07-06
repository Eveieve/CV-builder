import "./App.css";
import Personal from "./Personal";
import Experience from "./Experience";
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
    // unpacking the target element's name , value key
    // component will have 'name' and 'value' prop
    const { name, value } = e.target;

    setState((prevState) => ({
      // copy all other keys than 'projects'
      ...prevState,
      // inside 'projects' array, copy all other keys
      // overwrite the target element under Project section
      // each input box under Projects section has a 'name' prop
      projects: [
        // each object represents one project entity
        {
          // ...prevState.projects,
          ...prevState.projects[id],
          [name]: value,
        },
      ],
    }));
  }

  // function to add input boxes when 'add button' is clicked
  function handleAddProject() {
    // const { name, value } = e.target;
    // adds new object(project item) into 'projects' key
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
      {/* How do I have 'name' prop both 'title' and 'bulletPoint'? */}
      <Projects
        onChange={handleProjectsChange}
        name="title"
        projects={state.projects}
        value={state.projects.title}
      />
      <button onClick={handleAddProject}>Add project</button>
      <Section sectionName="EXPERIENCE" />
      <Experience onChange={handleExperienceChange} />
      {/* <input
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
      /> */}
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
