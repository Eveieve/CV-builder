function ProjectItem({
  id, // id is passed down from the parent component Projects
  projectItem,
  onChange,
}) {
  return (
    <>
      <input
        placeholder="Project Title"
        onChange={(e) => onChange(e, id)}
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
