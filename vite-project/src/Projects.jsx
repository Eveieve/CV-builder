import ProjectItem from "./ProjectItem";

function Projects({ projects, onChange }) {
  const projectItems = projects.map((projectItem) => {
    return (
      <ProjectItem
        key={projectItem.id}
        onChange={onChange}
        projectItem={projectItem}
        id={projectItem.id}
      />
    );
  });
  console.log(projectItems);
  return <>{projectItems}</>;
}

export default Projects;
