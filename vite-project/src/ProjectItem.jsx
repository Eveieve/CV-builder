function ProjectItem({ id, projectItem, onChange, onDelete }) {
  function handleChange(e) {
    onChange(e, id);
  }
  function handleDelete(e) {
    onDelete(e, id);
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
        name="bulletPoints"
        value={projectItem.bulletPoint}
      />
      <button onClick={handleDelete}>delete</button>
    </>
  );
}

export default ProjectItem;
