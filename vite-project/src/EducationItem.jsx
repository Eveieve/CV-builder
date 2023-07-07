// EducationItem object in state.education array
// what kind of action are input boxes here need to do/have? => onChange, know which educationItem object each should be inside, so it the value prop can be set
function EducationItem({ onChange, educationItem }) {
  return (
    <>
      <input
        placeholder="University Name"
        onChange={onChange}
        name="name"
        value={educationItem.name}
      />
      <input
        placeholder="Aug 20'- Mar 25'"
        onChange={onChange}
        name="date"
        value={educationItem.date}
      />
      <br />
      <input
        placeholder="Bsc. Computer Science"
        onChange={onChange}
        name="major"
        value={educationItem.major}
      />
      <br />
      <input
        placeholder="Bullet Point"
        onChange={onChange}
        name="bulletPoint"
        value={educationItem.bulletPoint}
      />
    </>
  );
}

export default EducationItem;
