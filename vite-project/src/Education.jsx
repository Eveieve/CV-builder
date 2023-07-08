import EducationItem from "./EducationItem";
import BulletPoints from "./BulletPoints";

// read state.education array from its parent
function Educations({ educations, onChange }) {
  const educationItems = educations.map((educationItem) => {
    return (
      <>
        <EducationItem
          key={educationItem.id}
          educationItem={educationItem}
          onChange={onChange}
          id={educationItem.id}
        />
        <BulletPoints
          bulletPoints={educationItem.bulletPoints}
          id={educationItem.id}
          onChange={onChange}
        />
      </>
    );
  });
  return <>{educationItems}</>;
}

export default Educations;
