import ExperienceItem from "./ExperienceItem";

function Experiences({ id, onDelete, experiences, onChange }) {
  // function handleDelete(e) {
  //   onDelete(e, id);
  // }
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
