import ExperienceItem from "./ExperienceItem";

function Experiences({ experiences, onChange }) {
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
