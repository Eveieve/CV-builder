import ProjectItem from "./ProjectItem";

function Projects({ projects, onChange }) {
  const projectEntity = projects.map((projectItem) => {
    // each ProjectItem(list) must have a key
    return (
      <ProjectItem
        key={projectItem.id}
        onChange={onChange}
        projectItem={projectItem}
        id={projectItem.id} // projectItem is the entity in the array at this particular time
      />
    );
  });
  // projectEntity is a set of input fields for Projects section
  return <>{projectEntity}</>;
}

export default Projects;
