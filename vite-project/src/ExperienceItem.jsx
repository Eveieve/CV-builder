// ExperienceItem component for state.experiences array

function ExperienceItem({ id, onChange, onDelete, experienceItem }) {
  function handleChange(e) {
    onChange(e, id);
  }

  function handleDelete(e) {
    onDelete(e, id);
  }
  return (
    <>
      <input
        placeholder="Company"
        onChange={handleChange}
        name="company"
        // ExperienceItem.company
        value={experienceItem.company}
      />
      <input
        placeholder="Aug 20'- Mar 25'"
        onChange={handleChange}
        name="date"
        value={experienceItem.date}
      />

      <input
        placeholder="Title"
        onChange={handleChange}
        name="title"
        value={experienceItem.title}
      />
      <textarea
        placeholder="This will be reformatted to bullet points on save"
        onChange={handleChange}
        name="bulletPoints"
        value={experienceItem.bulletPoint}
      />
      <button onClick={handleDelete}>delete</button>
    </>
  );
}

export default ExperienceItem;
