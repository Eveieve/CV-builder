// ExperienceItem component for state.experiences array

function ExperienceItem({ onChange, id, experienceItem }) {
  return (
    <>
      <input
        placeholder="Company"
        onChange={onChange}
        name="company"
        // ExperienceItem.company
        value={experienceItem.company}
      />
      <input
        placeholder="Aug 20'- Mar 25'"
        onChange={onChange}
        name="date"
        value={experienceItem.date}
      />
      <br />
      <input
        placeholder="Title"
        onChange={onChange}
        name="title"
        value={experienceItem.title}
      />
      <br />▪{" "}
      <input
        placeholder="Bullet Point"
        onChange={onChange}
        name="bulletPoint"
        value={experienceItem.bulletPoint}
      />
    </>
  );
}

export default ExperienceItem;
