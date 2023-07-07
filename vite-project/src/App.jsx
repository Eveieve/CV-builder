import "./App.css";
import Personal from "./Personal";
import Experiences from "./Experience";
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

    experiences: [
      {
        // initial experienceItem(object)
        company: "",
        title: "",
        date: "",
        bulletPoint: "",
      },
    ],
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
  // handler to be passed down to ProjectItem.js(Component that holds input fields )
  function handleProjectsChange(e, id) {
    const { name, value } = e.target; // name of the target element
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
      // computed [...newProjects] based on conditional statements above
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

  function handleExperienceChange(e, id) {
    const { name, value } = e.target;
    setState((prevState) => {
      // map a newExperiences array
      // if the argument id is the same as the one in experienceItem.id
      const newExperiences = prevState.experiences.map((experienceItem) => {
        if (id === experienceItem.id) {
          return {
            // copy all other keys in expereinceItem object
            ...experienceItem,
            [name]: value,
          };
          return { experienceItem };
        }
      });
      return { ...prevState, experiences: [...newExperiences] };
    });
  }

  function handleAddExperience(e) {
    //setState to update the state
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      experiences: [
        ...prevState.experiences,
        {
          company: "",
          title: "",
          date: "",
          bulletPoint: "",
        },
      ],
    }));
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
      <Projects onChange={handleProjectsChange} projects={state.projects} />
      <button onClick={handleAddProject}>Add project</button>
      <Section sectionName="EXPERIENCE" />
      <Experiences
        onChange={handleExperienceChange}
        experiences={state.experiences}
      />
      <button onClick={handleAddExperience}>Add Experience</button>
      <Section sectionName="EDUCATION" />
      <Education onChange={handleEducationChange} />
      <Section sectionName="VOLUNTEER & INTERESTS" />
    </>
  );
}

export default App;
