function Personal({ ...props }) {
  const { name, title, address, email, phone, linkedIn, gitHub } = { props };
  /// spreading (...props) is only doing onChange = {onChange}
  return (
    <>
      <input
        {...props}
        className="personal-one name"
        placeholder="Name"
        name="name"
        value={name}
      />
      <input
        {...props}
        className="personal-one title"
        placeholder="Title"
        name="title"
        value={title}
      />
      <input
        {...props}
        className="personal-two"
        placeholder="Address"
        name="address"
        value={address}
      />
      <input
        {...props}
        className="personal-two"
        placeholder="Email"
        name="email"
        value={email}
      />
      <input
        {...props}
        className="personal-two"
        placeholder="Phone"
        type="tel"
        name="phone"
        value={phone}
      />
      <input
        {...props}
        className="personal-two"
        placeholder="LinkedIn"
        name="linkedIn"
        value={linkedIn}
      />
      <input
        {...props}
        className="personal-two"
        placeholder="GitHub"
        name="gitHub"
        value={gitHub}
      />
    </>
  );
}

export default Personal;
