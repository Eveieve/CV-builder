// EducationItem object in state.education array
// what kind of action are input boxes here need to do/have? => onChange, know which educationItem object each should be inside, so it the value prop can be set
// id is the id of the educationItem entity
function EducationItem({ onChange, educationItem, id }) {
  function handleChange(e) {
    onChange(e, id);
  }
  return (
    <>
      <input
        placeholder="University Name"
        onChange={handleChange}
        name="name"
        value={educationItem.name}
      />
      <input
        placeholder="Aug 20'- Mar 25'"
        onChange={handleChange}
        name="date"
        value={educationItem.date}
      />
      <br />
      <input
        placeholder="Bsc. Computer Science"
        onChange={handleChange}
        name="major"
        value={educationItem.major}
      />
      <br />
      <input
        placeholder="Bullet Point"
        onChange={handleChange}
        name="bulletPoint"
        value={educationItem.bulletPoint}
      />
    </>
  );
}

export default EducationItem;
