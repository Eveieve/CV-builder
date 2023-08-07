import React from 'react';
import InputForm from './InputForm';
import Button from './Button';

function PersonalInfoForm(props) {
  const { handleChange, handleSubmit, infoObj } = props;

  console.log(handleSubmit);

  return (
    <div className="flex flex-col items-center px-8 py-4">
      <form onSubmit={handleSubmit} className="mx-4 flex flex-col gap-4">
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <InputForm
              type="text"
              value={infoObj.name}
              id="name"
              handler={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="jobTitle">Title</label>
            <InputForm
              type="text"
              value={infoObj.jobTitle}
              id="jobTitle"
              handler={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="summary">Summary</label>
          <textarea
            onChange={handleChange}
            value={infoObj.summary}
            id="summary"
            name="summary"
            placeholder="Give a short summary of yourself"
            className="rounded-md border px-2 py-1"
            rows="4"
          />
        </div>
        <div className="mb-4 flex gap-4">
          <div className="flex flex-col">
            <label htmlFor="phone">Phone Number</label>
            <InputForm
              type="text"
              value={infoObj.phone}
              id="phone"
              handler={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <InputForm
              type="email"
              value={infoObj.email}
              id="email"
              handler={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address">Address</label>
            <InputForm
              type="text"
              value={infoObj.address}
              id="address"
              handler={handleChange}
            />
          </div>
        </div>
        <div className="mb-4 flex gap-4">
          <div className="flex flex-col">
            <label htmlFor="linkedin">LinkedIn</label>
            <InputForm
              type="text"
              value={infoObj.linkedin}
              id="linkedin"
              handler={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="github">GitHub</label>
            <InputForm
              type="text"
              value={infoObj.github}
              id="github"
              handler={handleChange}
            />
          </div>
        </div>
        <div>
          <Button type="button" text="Add Information" handler={handleSubmit} />
        </div>
      </form>
    </div>
  );
}

export default PersonalInfoForm;
