import Button from './Button';
function SkillsForm(props) {
  // take in Skills local state
  const { skills, handleSave, handleChange } = props;

  return (
    <>
      <textarea
        value={skills}
        type="text"
        onChange={handleChange}
        name="skills"
      />
      <Button type="button" handler={handleSave} text="Save" />
    </>
  );
}

export default SkillsForm;
