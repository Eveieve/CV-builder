import ExperienceItem from "./ExperienceItem";

function Experiences({ onDelete, experiences, onChange }) {
  const experienceItems = experiences.map((experienceItem) => {
    return (
      <ExperienceItem
        key={experienceItem.id}
        onChange={onChange}
        onDelete={onDelete}
        experienceItem={experienceItem}
        id={experienceItem.id}
      />
    );
  });
  return <>{experienceItems}</>;
}

export default Experiences;
