function InputForm() {
  const { type, handler, id, value } = props;

  return (
    <input
      type={type}
      value={value}
      name={id}
      onChange={handler}
      className="rounded-md border px-2 py-1"
    />
  );
}
