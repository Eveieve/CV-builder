function BulletPoint({ onChange, content }) {
  // when btn clicked, adds a box to input a bullet point
  return (
    <>
      <input onChange={onChange} value={content} />
    </>
  );
}

export default BulletPoint;
