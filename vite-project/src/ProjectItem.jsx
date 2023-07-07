function ProjectItem({
  id, // id is passed down from the parent component Projects
  projectItem,
  onChange,
}) {
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
        onChange={(e) => onChange(e, id)}
        name="bulletPoint"
        value={projectItem.bulletPoint}
      />
    </>
  );
}

export default ProjectItem;
//    onChange={(e) => onChange(e, id)}
// Ahhhh defining a new function , which will execute the onChange(e,id) with e and id argument
