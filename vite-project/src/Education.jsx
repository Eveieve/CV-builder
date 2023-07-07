import EducationItem from "./EducationItem";
// read state.education array from its parent
function Education({ educations, onChange, value }) {
  // this only gets run once
  // to render it again to the up to date state, need to map over state.education array and render educationItems
  const educationItems = educations.map((educationItem) => {
    return (
      <EducationItem
        educationItem={educationItem}
        onChange={onChange}
        id={educationItem.id}
      />
    );
  });
  return <>{educationItems}</>;
}

export default Education;
