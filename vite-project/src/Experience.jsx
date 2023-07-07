// component for state.experiences, holds multiple ExperienceItems
import ExperienceItem from "./ExperienceItem";
// read state.experiences from the parent component
function Experiences({ experiences, onChange }) {
  // map experiences array(which is up to date) and render all ExperienceItems
  // a collection of ExperienceItems = Experiences

  const experienceItems = experiences.map((experienceItem) => {
    return (
      <ExperienceItem
        key={experienceItem.id}
        onChange={onChange}
        experienceItem={experienceItem}
        id={experienceItem.id}
      />
    );
  });
  return <>{experienceItems}</>;
}

export default Experiences;
