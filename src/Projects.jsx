import ProjectItem from './ProjectItem';

function Projects({ projects, onChange, onDelete }) {
  const projectItems = projects.map(projectItem => {
    return (
      <ProjectItem
        key={projectItem.id}
        onChange={onChange}
        projectItem={projectItem}
        id={projectItem.id}
        onDelete={onDelete}
      />
    );
  });
  return <>{projectItems}</>;
}

export default Projects;
