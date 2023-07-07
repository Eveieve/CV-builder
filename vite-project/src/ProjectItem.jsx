function ProjectItem({ id, projectItem, onChange }) {
  function handleChange(e) {
    onChange(e, id);
  }

  return (
    <>
      <input
        placeholder="Project Title"
        onChange={handleChange}
        name="title"
        value={projectItem.title}
      />
      <input
        placeholder="Bullet Point"
        onChange={handleChange}
        name="bulletPoint"
        value={projectItem.bulletPoint}
      />
    </>
  );
}

export default ProjectItem;
