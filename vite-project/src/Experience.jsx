function Experience({ onChange, name, value }) {
  return (
    <>
      <input
        placeholder="Company"
        onChange={onChange}
        name="company"
        value={value}
      />
      <input
        placeholder="Aug 20'- Mar 25'"
        onChange={onChange}
        name="date"
        value={value}
      />
      <br />
      <input
        placeholder="Title"
        onChange={onChange}
        name="title"
        value={value}
      />
      <br />▪{" "}
      <input
        placeholder="Bullet Point"
        onChange={onChange}
        name="bulletPoint"
        value={value}
      />
    </>
  );
}

export default Experience;
