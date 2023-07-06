// define each project Item (object) in state.projects
// the component at the very bottom?
function ProjectItem({ projectItem, onChange }) {
  // update state here
  // how do I get the state here?

  function handleProjectItemChange() {}
  return (
    <>
      <input
        placeholder="Project Title"
        onChange={onChange}
        name="title"
        value={projectItem.title}
      />
      <input
        placeholder="Bullet Point"
        onChange={onChange}
        name="bulletPoint"
        value={projectItem.bulletPoint}
      />
    </>
  );
}

export default ProjectItem;
