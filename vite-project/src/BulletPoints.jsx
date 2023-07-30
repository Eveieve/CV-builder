import BulletPointItem from './BulletPointItem';

function BulletPoints({ setState, bulletPoints, onChange, state }) {
  const bulletPointItems = bulletPoints?.map(bulletPointItem => {
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
