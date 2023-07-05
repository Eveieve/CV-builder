function Header({ onChange, name, title, address }) {
  return (
    <>
      <input onChange={onChange} type="text" name={name} />
      <input onChange={onChange} type="text" />
      <input onChange={onChange} type="text" />
    </>
  );
}

export default Header;
