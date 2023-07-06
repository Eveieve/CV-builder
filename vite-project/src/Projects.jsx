import ProjectItem from "./ProjectItem";
// import  ProjectItem as a component!

function Projects({ projects, onChange, value, onAdd, name }) {
  // unpack properties from the props object

  const projectItems = projects.map((projectItem) => (
    // each ProjectItem(list) must have a key
    <ProjectItem
      key={projectItem.id}
      onChange={onChange}
      projectItem={projectItem}
      id={projectItem.id}
    />
  ));

  return <>{projectItems}</>;
}

export default Projects;
