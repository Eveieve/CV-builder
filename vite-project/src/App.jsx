import "./App.css";
import Personal from "./Personal";
import Projects from "./Projects";
import Experiences from "./Experience";
import Educations from "./Education";
import { useState } from "react";
import Section from "./Section.jsx";

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
        bulletPoints: [],
        id: uniqid(),
      },
    ],

    experiences: [
      {
        company: "",
        title: "",
        date: "",
        bulletPoints: [],
        id: uniqid(),
      },
    ],
    educations: [
      {
        name: "",
        date: "",
        major: "",
        bulletPoints: [
          {
            bulletPoint: "",
            id: "",
          },
        ],
        id: uniqid(),
      },
    ],
    interests: "",
  });

  // handlers
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

    setState((prevState) => {
      const newProjects = prevState.projects.map((projectItem) => {
        if (projectItem.id === id) {
          return { ...projectItem, [name]: value };
        }
        return projectItem;
      });
      return { ...prevState, projects: [...newProjects] };
    });
    console.log(state);
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
          return { ...experienceItem, [name]: value };
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
    console.log(state.experiences);
  }

  function handleEducationChange(e, id) {
    const { name, value } = e.target;
    setState((prevState) => {
      const newEducations = prevState.educations.map((educationItem) => {
        if (id === educationItem.id) {
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      });
      return { ...prevState, educations: [...newEducations] };
    });
  }

  function handleAddEducation() {
    setState((prevState) => ({
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
    }));
    console.log(state.educations);
  }

  function handleChangeInterests(e) {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(state);
  }

  function addBullet(e, id) {
    //adds a bullet to the object (updates state)
    // each bullet has a unique id
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
      <Educations
        onChange={handleEducationChange}
        educations={state.educations}
      />
      <button onClick={handleAddEducation}>Add Education</button>
      <Section sectionName="INTERESTS" />
      <textarea
        onChange={handleChangeInterests}
        name="interests"
        value={state.interests}
        placeholder="Technical Writing; UX Design; Photography; Baking"
      />
    </>
  );
}

export default App;
