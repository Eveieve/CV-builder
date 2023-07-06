import ProjectItem from "./ProjectItem";
// import  ProjectItem as a component!

function Projects({ projects, onChange, value, onAdd }) {
  // unpack properties from the props object
  const projectItems = projects.map((projectItem) => (
    // each ProjectItem(list) must have a key
    <ProjectItem key={projectItem.id} id={projectItem.id} onChange={onChange} />
  ));

  return <>{projectItems}</>;
}

export default Projects;
