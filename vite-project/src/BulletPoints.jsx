import BulletPointItem from "./BulletPointItem";

// Bulletpoints component represents a bulletPoints array for each section

// read the educationItem object the bullet should be inside
// educationItem.bulletPoint(s) = array of bullets
// bulletPoint(s) array contains a list of bulletPoint objects

// can only read educationItem.bulletPoint array i think..
// i can get educationItem's id

// each bulletPointItem has an id. Use this for the key
function BulletPoints({ setState, bulletPoints, onChange, state }) {
  // comes with a button
  // console.log(bulletPoints);

  const bulletPointItems = bulletPoints?.map((bulletPointItem) => {
    return (
      <BulletPointItem
        key={bulletPointItem.id}
        bulletPointItem={bulletPointItem} // reads the bulletPointItem object
        id={bulletPointItem.id}
        onChange={onChange}
        state={state}
        setState={setState}
      />
    );
  });

  return <>{bulletPointItems}</>;
}

export default BulletPoints;
