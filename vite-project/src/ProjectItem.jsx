function ProjectItem({ id, projectItem, onChange }) {
  function handleChange(e) {
    onChange(e, id); //calls onChange handler with the id it reads.
    // id is what it receives from its parent
    // id is the id of each ProjectItem object

    // onChange of the projectItem input fields,
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
    </>
  );
}

export default ProjectItem;
