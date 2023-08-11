import { useState } from 'react';
import uniqid from 'uniqid';
import ProjectsForm from './ProjectsForm';
import ProjectsDisplay from './ProjectsDisplay';
import Button from './Button';

// put together all projects components
function Projects() {
  const [projects, setProjects] = useState([]);

  const [isFormShown, setIsFormShown] = useState(false);

  const addProject = () => {
    setProjects(prev => [
      ...prev,
      {
        id: uniqid(),
        title: '',
        description: '',
      },
    ]);
    setIsFormShown(true);
  };

  const deleteProject = id => {
    const newProjects = projects.filter(item => item.id !== id);

    if (projects.length === 1) {
      setProjects([]);
      setIsFormShown(false);
    } else {
      setIsFormShown(true);
      setProjects(newProjects);
    }
  };

  const projectItems = projects?.map(item => {
    return (
      <div key={item.id}>
        <ProjectsForm
          id={item.id}
          handleDelete={deleteProject}
          handleAdd={addProject}
        />
        <Button text="Add Project" handler={addProject} />
      </div>
    );
  });

  if (isFormShown) {
    return projectItems;
  }

  return (
    <div>
      <ProjectsDisplay
        projects={projects}
        handleAdd={addProject}
        handleDelete={deleteProject}
      />
      <Button text="Add Project" handler={addProject} />
    </div>
  );
}

export default Projects;
