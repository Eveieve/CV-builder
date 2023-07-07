import EducationItem from "./EducationItem";
// read state.education array from its parent
function Educations({ educations, onChange }) {
  const educationItems = educations.map((educationItem) => {
    return (
      <EducationItem
        key={educationItem.id}
        educationItem={educationItem}
        onChange={onChange}
        id={educationItem.id}
      />
    );
  });
  return <>{educationItems}</>;
}

export default Educations;
