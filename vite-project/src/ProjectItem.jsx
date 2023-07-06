// define each project Item (object) in state.projects
// the component at the very bottom?
function ProjectItem({ projectItem, onChange, value }) {
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
