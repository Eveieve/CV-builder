import BulletPoints from './BulletPoints';

function EducationItem({ id, educationItem, onChange, onDelete }) {
  function handleChange(e) {
    console.log(e);
    onChange(e, id);
  }

  function handleDelete(e) {
    onDelete(e, id);
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
      <input
        placeholder="Bsc. Computer Science"
        onChange={handleChange}
        name="major"
        value={educationItem.major}
      />
      <BulletPoints bulletPointObj={educationItem.bulletPoint} />
      <input
        placeholder="Bullet Point"
        onChange={handleChange}
        name="bulletPoints"
        value={educationItem.bulletPoint}
      />
      <button onClick={handleDelete}>delete</button>
    </>
  );
}

export default EducationItem;
