import Button from './Button';

export default function PersonalInfoDisplay({ infoObj, clickHandler }) {
  const isEmpty = () => Object.values(infoObj).every(field => field === '');

  const { name, jobTitle, summary, email, address, phone, linkedin, github } =
    infoObj;

  if (isEmpty()) {
    return (
      <div className="px-8 py-4">
        <p>You haven't filled out your personal information yet</p>
        <Button type="button" handler={clickHandler} text="Add Info" />
      </div>
    );
  }

  // return formatted for-display jsx
  return (
    <>
      <div className="border-b-2 border-black px-8 py-4">
        <h2 className="text-2xl font-bold text-sky-800">{name}</h2>
        <h3 className="mb-2 text-xl text-gray-700">{jobTitle}</h3>
        <p className="mb-2">{summary}</p>
        <Button type="button" handler={clickHandler} text="Edit" />
      </div>
      <div className="grid grid-cols-2 border-b-2 border-black px-12 py-4">
        <div className="flex gap-2">
          <p>{name}</p>
        </div>
        <div className="flex gap-2">
          <p>{jobTitle}</p>
        </div>
        <div className="flex gap-2">
          <p>{summary}</p>
        </div>
        <div className="flex gap-2">
          <p>{address}</p>
        </div>
        <div className="flex gap-2">
          <p>{email}</p>
        </div>
        <div className="flex gap-2">
          <p>{phone}</p>
        </div>
        <div className="flex gap-2">
          <p>{linkedin}</p>
        </div>
        <div className="flex gap-2">
          <p>{github}</p>
        </div>
      </div>
    </>
  );
}
