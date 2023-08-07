const STYLES_MAP = new Map([
  ['primary', 'bg-purple-400 border-sky-800 hover:text-sky-800'],
  ['alert', 'bg-rose-700 border-rose-700 hover:text-rose-700'],
]);

function Button(props) {
  const { type, handler, value, styles } = props;

  // if you can 'styles' passed down to it, use that for styling
  // If not => "primary"
  const colors = STYLES_MAP.get(styles || 'primary');

  return (
    <button
      type={type}
      {...(handler && { onClick: handler })}
      value={value ?? ''}
      className={`rounded-md border-2 p-1 font-bold text-white
    transition hover:bg-transparent ${colors}`}
    >
      {props.text ?? props.child}
    </button>
  );
}

export default Button;
