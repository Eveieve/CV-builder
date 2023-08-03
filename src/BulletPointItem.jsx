function BulletPointItem({ setState, bulletPointItem }) {
  function updateStateOnChange(e) {
    const { name, value } = e.target;

    setState(prevState => ({
      ...prevState,
      educations: {
        ...prevState.educations,
        ...prevState.educations.bulletPoints,
        [name]: value,
      },
    }));
  }
  return (
    <>
      <input
        placeholder="bullet point"
        name="title"
        value={bulletPointItem.title}
        onChange={updateStateOnChange}
      />
    </>
  );
}

export default BulletPointItem;
