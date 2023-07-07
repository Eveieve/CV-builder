// ExperienceItem component for state.experiences array

function ExperienceItem({ id, onChange, experienceItem }) {
  function handleChange(e) {
    // id is the id of each experienceItem
    onChange(e, id);
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
      <br />
      <input
        placeholder="Title"
        onChange={handleChange}
        name="title"
        value={experienceItem.title}
      />
      <br />▪{" "}
      <input
        placeholder="Bullet Point"
        onChange={handleChange}
        name="bulletPoint"
        value={experienceItem.bulletPoint}
      />
    </>
  );
}

export default ExperienceItem;
