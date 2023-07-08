// represents bulletPoints array key for each educationItem(object)
// id is the bulletPointItem object's id
function BulletPointItem({ bulletPointItem, id, onChange }) {
  function handleChange(e) {
    onChange(e, id);
    console.log(bulletPointItem);
  }
  return (
    <>
      <input
        placeholder="bullet point"
        name="title"
        value={bulletPointItem.title} // there's a 'title' key in bulletPointItem object
        onChange={handleChange}
      />
    </>
  );
}

export default BulletPointItem;
