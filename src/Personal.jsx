import { useState } from 'react';

import PersonalInfoForm from './PersonalInfoForm';

// returns an object with keys
// each key is empty initially
const getEmptyPersonalInfo = () => {
  const keys = [
    'name',
    'jobTitle',
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

function PersonalInfo() {
  const [info, setInfo] = useState(getEmptyPersonalInfo());
  const [isFormShown, setIsFormShown] = useState(false);

  const toggleForm = () => setIsFormShown(true);

  const submitPersonalInfo = e => {
    e.preventDefault();

    setIsFormShown(false);
  };

  const handleChange = e => {
    // destructure  from target element
    const { nameOfTarget, value } = e.target;

    setInfo({
      ...info,
      [nameOfTarget]: value,
    });
  };
  if (isFormShown) {
    return (
      <PersonalInfoForm
        info={info}
        handleSubmit={submitPersonalInfo}
        handleChange={handleChange}
      />
    );
  }

  return <GeneralInfoDisplay info={info} clickHandler={toggleForm} />;
}

//////////////////////////////////////////////////////////////////////////////
function Personal({ ...props }) {
  const { name, title, address, email, phone, linkedIn, gitHub } = { props };

  return (
    <>
      <label for="name" class="block text-slate-700">
        <span class="block">Name: </span>
        <input
          {...props}
          className="mt-1 block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm 
             rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
          required
          placeholder="John"
          name="name"
          value={name}
        />
      </label>
      <label>
        <span class="block">Job title</span>
        <input
          {...props}
          className="mt-1 block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm 
            rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
          required
          placeholder="Title"
          name="title"
          value={title}
        />
      </label>

      <input
        {...props}
        className="address"
        placeholder="Address"
        name="address"
        value={address}
      />
      <input
        {...props}
        className="email"
        placeholder="Email"
        name="email"
        value={email}
      />
      <input
        {...props}
        className="phone"
        placeholder="Phone"
        type="tel"
        name="phone"
        value={phone}
      />
      <input
        {...props}
        className="linkedIn"
        placeholder="LinkedIn"
        name="linkedIn"
        value={linkedIn}
      />
      <input
        {...props}
        className="gitHub"
        placeholder="GitHub"
        name="gitHub"
        value={gitHub}
      />
    </>
  );
}

export default Personal;
