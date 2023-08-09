import { useState } from 'react';
import SkillsForm from './SkillsForm';
import SkillsDisplay from './SkillsDisplay';

function Skills() {
  const [skills, setSkills] = useState('');

  const [isFormShown, setIsFormShown] = useState(false);

  function handleChange(e) {
    const { value } = e.target;

    setSkills(value);
  }

  function handleSave() {
    setIsFormShown(prevState => !prevState);
    console.log(isFormShown);
  }

  if (isFormShown) {
    return (
      <>
        <SkillsForm
          skills={skills}
          handleChange={handleChange}
          isFormShown={isFormShown}
          handleSave={handleSave}
        />
      </>
    );
  }
  // if FormisNotShown(saved mode)
  return (
    <>
      <SkillsDisplay handleSave={handleSave} skills={skills}></SkillsDisplay>
    </>
  );
}

export default Skills;
