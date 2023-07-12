function Personal({ ...props }) {
  const { name, title, address, email, phone, linkedIn, gitHub } = { props };
  /// spreading (...props) is only doing onChange = {onChange}
  return (
    <>
      <div className="personal-one">
        <input
          {...props}
          className="name"
          placeholder="Name"
          name="name"
          value={name}
        />
        <input
          {...props}
          className="title"
          placeholder="Title"
          name="title"
          value={title}
        />
      </div>
      <div className="personal-two">
        <input
          {...props}
          className="address"
          placeholder="Address"
          name="address"
          value={address}
        />
        <input
          {...props}
          className="email"
          placeholder="Email"
          name="email"
          value={email}
        />
        <input
          {...props}
          className="phone"
          placeholder="Phone"
          type="tel"
          name="phone"
          value={phone}
        />
        <input
          {...props}
          className="linkedIn"
          placeholder="LinkedIn"
          name="linkedIn"
          value={linkedIn}
        />
        <input
          {...props}
          className="gitHub"
          placeholder="GitHub"
          name="gitHub"
          value={gitHub}
        />
      </div>
    </>
  );
}

export default Personal;
