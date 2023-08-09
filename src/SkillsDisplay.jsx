import Button from './Button';

function SkillsDisplay({ skills, handleSave }) {
  return (
    <>
      <div>{skills}</div>
      <Button type="button" text="Add skills" handler={handleSave} />
    </>
  );
}

export default SkillsDisplay;
