function InputForm(props) {
  const { type, handler, id, value } = props;

  return (
    <input
      type={type}
      name={id}
      value={value}
      onChange={handler}
      className="rounded-md border px-1 py-1"
    />
  );
}
export default InputForm;
