import { useState } from 'react';
import Button from './Button';
import PersonalInfoForm from './PersonalInfoForm';
import PersonalInfoDisplay from './PersonalInfoDisplay';
// returns an object with keys
// each key is empty initially
const getEmptyPersonalInfo = () => {
  const keys = [
    'name',
    'jobTitle',
    'summary',
    'email',
    'address',
    'phone',
    'linkedin',
    'github',
  ];
  return keys.reduce((obj, key) => {
    obj[key] = '';
    return obj;
  }, {});
};

// Handles PersonalInfo section
// has handlers etc...
function PersonalInfo() {
  const [infoObj, setInfo] = useState(getEmptyPersonalInfo());
  const [isFormShown, setIsFormShown] = useState(false);

  const toggleForm = () => setIsFormShown(prevState => !prevState);

  const handleSubmit = event => {
    // STOP REFRESHING!
    event.preventDefault();
    setIsFormShown(prevState => !prevState);
  };

  const handleChange = e => {
    // destructure  from target element
    const { name, value } = e.target;

    setInfo({
      ...infoObj,
      [name]: value,
    });
    console.log(infoObj);
  };

  // is click to show form (form)
  if (isFormShown) {
    return (
      <PersonalInfoForm
        infoObj={infoObj}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    );
  }

  return <PersonalInfoDisplay infoObj={infoObj} clickHandler={toggleForm} />;
}

export default PersonalInfo;
