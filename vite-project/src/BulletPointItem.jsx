// represents bulletPoints array key for each educationItem(object)
// id is the bulletPointItem object's id
function BulletPointItem({ bulletPointItem, id, bulletPoints, onChange }) {
  // when btn clicked, adds a box to input a bullet point

  // add bullet object to the bulletPoints array

  // handleChange function for when it's changed => update the state
  return (
    <>
      <input
        placeholder="bullet point"
        // onChange={handleChange}
        // onAdd={handleAddBullet}
        bulletPoints={bulletPoints}
        name="bulletPoint"
        value={bulletPointItem.bulletPoint}
      />
    </>
  );
}

export default BulletPointItem;
