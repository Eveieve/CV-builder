function Education({ onChange, value }) {
  return (
    <>
      <input
        placeholder="University Name"
        onChange={onChange}
        name="name"
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
        placeholder="Bsc. Computer Science"
        onChange={onChange}
        name="major"
        value={value}
      />
      <br />
      <input
        placeholder="Bullet Point"
        onChange={onChange}
        name="bulletPoint"
        value={value}
      />
    </>
  );
}

export default Education;
