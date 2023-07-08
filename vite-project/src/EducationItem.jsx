import BulletPoints from "./BulletPoints";

function EducationItem({ id, educationItem, onChange }) {
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
      <BulletPoints bulletPointObj={educationItem.bulletPoint} />
      <input
        placeholder="Bullet Point"
        onChange={handleChange}
        name="bulletPoints"
        value={educationItem.bulletPoint}
      />
    </>
  );
}

export default EducationItem;
