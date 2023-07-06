// define each project Item (object) in state.projects
// the component at the very bottom?
function ProjectItem({ onChange, value }) {
  return (
    <>
      <input
        placeholder="Project Name"
        onChange={onChange}
        name="projectName"
        value={value}
      />
      <input
        placeholder="Bullet Point"
        onChange={onChange}
        name="bulletPoint"
        value={value}
      />
    </>
  );
}

export default ProjectItem;
