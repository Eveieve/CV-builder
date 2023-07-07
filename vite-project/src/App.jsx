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
        id: uniqid(),
      },
    ],
    educations: [
      {
        name: "",
        date: "",
        major: "",
        bulletPoint: "",
        id: uniqid(),
      },
    ],
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

  function handleExperienceChange(e, id) {
    const { name, value } = e.target;
    setState((prevState) => {
      const newExperiences = prevState.experiences.map((experienceItem) => {
        if (id === experienceItem.id) {
          return {
            ...experienceItem,
            [name]: value,
          };
        }
        return experienceItem;
      });
      return { ...prevState, experiences: [...newExperiences] };
    });
  }

  function handleAddExperience() {
    setState((prevState) => ({
      ...prevState,
      experiences: [
        ...prevState.experiences,
        {
          company: "",
          title: "",
          date: "",
          bulletPoint: "",
          id: uniqid(),
        },
      ],
    }));
  }

  function handleEducationChange(e, id) {
    const { name, value } = e.target;
    setState((prevState) => {
      const newEducations = prevState.educations.map((educationItem) => {
        if (id === educationItem.id) {
          return {
            ...educationItem,
            [name]: value,
          };
        }
        return { educationItem };
      });
      return { ...prevState, educations: [...newEducations] };
    });
  }

  function handleAddEducation() {
    setState((prevState) => {
      return {
        ...prevState,
        educations: [
          // copy all other educationItem objects
          ...prevState.educations,
          {
            name: "",
            date: "",
            major: "",
            bulletPoint: "",
            id: uniqid(),
          },
        ],
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
      <Education
        onChange={handleEducationChange}
        educations={state.educations}
      />
      <button onClick={handleAddEducation}>Add Education</button>
      <Section sectionName="VOLUNTEER & INTERESTS" />
    </>
  );
}

export default App;
