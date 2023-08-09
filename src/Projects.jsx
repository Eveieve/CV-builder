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
    console.log(newProjects);
    setProjects(() => [newProjects]);
    if (projects.length === 1) {
      setIsFormShown(false);
      return <>{setProjects([])}</>;
    }
  };

  if (isFormShown) {
    const projectItems = projects?.map(item => {
      return (
        <>
          <ProjectsForm
            key={item.id}
            id={item.id}
            handleDelete={deleteProject}
            handleAdd={addProject}
          />
          <Button text="Add Projects" handler={addProject} />
        </>
      );
    });
    return <>{projectItems}</>;
  }

  return (
    <>
      <ProjectsDisplay
        projects={projects}
        handleAdd={addProject}
        handleDelete={deleteProject}
      />
      <Button text="Add Projects" handler={addProject} />
    </>
  );
}

export default Projects;
