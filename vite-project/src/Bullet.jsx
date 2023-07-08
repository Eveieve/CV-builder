// read the educationItem object the bullet should be inside
// educationItem.bulletPoint(s) = array of bullets
function Bullet({ educationItem }) {
  // comes with a button
  return (
    <>
      <input
        placeholder="Bullet Point"
        onChange={handleChange}
        name="bulletPoint"
        value={educationItem.bulletPoint}
      />
    </>
  );
}

export default Bullet;

<input
  placeholder="Bullet Point"
  onChange={handleChange}
  name="bulletPoint"
  value={educationItem.bulletPoint}
/>;
