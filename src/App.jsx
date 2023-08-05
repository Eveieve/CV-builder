import './App.css';
import Personal from './Personal';
import Projects from './Projects';
import Experiences from './Experience';
import Educations from './Education';
import { useState } from 'react';
import Section from './Section.jsx';
import uniqid from 'uniqid';

function App() {
  const [state, setState] = useState({
    name: '',
    title: '',
    address: '',
    phone: '',
    email: '',
    linkedIn: '',
    gitHub: '',

    techSkills: {
      skills: '',
    },
    projects: [
      {
        title: '',
        bulletPoints: '',
        id: uniqid(),
      },
    ],

    experiences: [
      {
        company: '',
        title: '',
        date: '',
        bulletPoints: '',
        id: uniqid(),
      },
    ],
    educations: [
      {
        name: '',
        date: '',
        major: '',
        bulletPoints: '',
        id: uniqid(),
      },
    ],
    interests: '',
  });

  // receive event as an argument
  function handleChange(e) {
    setState(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleTechSkillsChange(e) {
    const { name, value } = e.target;

    setState(prevState => ({
      ...prevState,
      techSkills: {
        ...prevState.techSkills,
        [name]: value,
      },
    }));
  }

  function handleProjectsChange(e, id) {
    console.log(e.target);
    console.log(e.target.name);
    const { name, value } = e.target;

    setState(prevState => {
      const newProjects = prevState.projects.map(projectItem => {
        if (projectItem.id === id) {
          console.log(name, value);
          // each projectItem has a ''title' property
          // target element's name attribute is set to 'title'
          return { ...projectItem, [name]: value };
        }
        return projectItem;
      });
      return { ...prevState, projects: [...newProjects] };
    });
    console.log(state);
  }

  // add a new project
  function handleAddProject() {
    setState(prevState => ({
      ...prevState,
      projects: [
        ...prevState.projects,
        {
          title: '',
          bulletPoints: '',
          id: uniqid(),
        },
      ],
    }));
  }

  function handleDeleteProject(id) {
    setState(prevState => {
      // newProjects array that is filtered out
      const newProjects = prevState.projects.filter(
        projectItem => id !== projectItem.id,
      );
      return { ...prevState, projects: [...newProjects] };
    });
  }

  function handleExperienceChange(e, id) {
    const { name, value } = e.target;
    setState(prevState => {
      const newExperiences = prevState.experiences.map(experienceItem => {
        if (id === experienceItem.id) {
          return { ...experienceItem, [name]: value };
        }
        return experienceItem;
      });
      return { ...prevState, experiences: [...newExperiences] };
    });
    console.log(state);
  }

  function handleAddExperience() {
    setState(prevState => ({
      ...prevState,
      experiences: [
        ...prevState.experiences,
        {
          company: '',
          title: '',
          date: '',
          bulletPoints: '',
          id: uniqid(),
        },
      ],
    }));
    console.log(state.experiences);
  }

  function handleDeleteExperience(id) {
    setState(prevState => {
      const newExperiences = prevState.experiences.filter(
        experienceItem => id !== experienceItem.id,
      );

      return { ...prevState, experiences: [...newExperiences] };
    });
  }

  // prevent refreshing page
  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleEducationChange(e, id) {
    const { name, value } = e.target;
    setState(prevState => {
      const newEducations = prevState.educations.map(educationItem => {
        if (id === educationItem.id) {
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      });

      return { ...prevState, educations: [...newEducations] };
    });
  }

  function handleAddEducation() {
    setState(prevState => ({
      ...prevState,
      educations: [
        // copy all other educationItem objects
        ...prevState.educations,
        {
          name: '',
          date: '',
          major: '',
          bulletPoints: '',
          id: uniqid(),
        },
      ],
    }));
    console.log(state);
  }
  // The deletion should be happening in Education Section,
  // I need to delete on EducationItem on click of delete button.
  // You'll be able to call handleDeleteEducation() from EducationItem.js bc when you map the Educations array, you will return an element with a unique key for each.
  // And you can pass down id of each item to each EducationItem component - you can read the id  in EducationItem() component

  //  id of the each element in the array will be known to you.
  // You just need to check to see if that id of the item(object) is equal to the one you read in your component
  // the id of the item(object) will be passed down from
  function handleDeleteEducation(e, id) {
    console.log(e);
    // setState to set an updated state
    // filter educations array and recreate an array with items that don't match the id
    setState(prevState => {
      // opening block
      const newEducations = prevState.educations.filter(
        educationItem => id !== educationItem.id,
      );

      return { ...prevState, educations: [...newEducations] };
    });
  }

  function handleChangeInterests(e) {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
    console.log(state);
  }

  // changes the text to 'Edit CV' at the end
  function toggleSaveCV(e) {
    // buttons except for SaveCV button
    let buttons = document.querySelectorAll('button:not(.saveCV)');
    console.log(buttons);
    let btnsArray = Array.from(buttons);
    let inputs = document.querySelectorAll('input, textarea');
    console.log(inputs);
    let inputsArray = [...inputs];
    if (e.target.classList.contains('editing')) {
      btnsArray.map(btn => (btn.className = 'hidden'));
      e.target.textContent = 'Edit CV';
      e.target.classList.toggle('editing');
      inputsArray.map(input => input.setAttribute('readonly', 'readonly'));
    } else {
      btnsArray.map(btn => (btn.className = 'not-hidden'));
      e.target.textContent = 'Save CV';
      e.target.classList.toggle('editing');
      inputsArray.map(input => input.removeAttribute('readonly'));
    }
  }

  return (
    <>
      <h1 className="text-5xl font-bold underline">CV Builder</h1>
      <div className="form-and-resume">
        <form className="form" onSubmit={handleSubmit}>
          <button
            className="saveCV editing"
            type="submit"
            onClick={toggleSaveCV}
          >
            Save CV
          </button>
          <Personal onChange={handleChange} />
          <Section sectionName="TECHNICAL SKILLS" />
          <textarea
            onChange={handleTechSkillsChange}
            name="skills"
            value={state.techSkills.skills}
          />
          <Section sectionName="PROJECTS" />
          <Projects
            onChange={handleProjectsChange}
            projects={state.projects}
            onDelete={handleDeleteProject}
          />

          <button onClick={handleAddProject}>Add project</button>
          <Section sectionName="EXPERIENCE" />
          <Experiences
            onChange={handleExperienceChange}
            experiences={state.experiences}
            onDelete={handleDeleteExperience}
          />
          <button onClick={handleAddExperience}>Add Experience</button>
          <Section sectionName="EDUCATION" />
          <Educations
            onChange={handleEducationChange}
            educations={state.educations}
            onDelete={handleDeleteEducation}
          />
          <button onClick={handleAddEducation}>Add Education</button>
          <Section sectionName="INTERESTS" />
          <textarea
            onChange={handleChangeInterests}
            name="interests"
            value={state.interests}
            placeholder="Technical Writing; UX Design; Photography; Baking"
          />
        </form>
        <div className="resume">
          <div className="cv-header">
            <div className="cv-name"></div>
            <div className="cv-position"></div>
            <div className="cv-contacts">
              <div className="cv-city"></div>
              <div className="cv-phone"></div>
              <div className="cv-email"></div>
              <div className="cv-github"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
