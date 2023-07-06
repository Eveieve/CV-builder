function Personal({ ...props }) {
  const { name, title, address, email, phone, linkedIn, gitHub } = { props };
  /// spreading (...props) is only doing onChange = {onChange}
  return (
    <>
      <input {...props} placeholder="Name" name="name" value={name} />
      <input {...props} placeholder="Title" name="title" value={title} />
      <br />
      <input {...props} placeholder="Address" name="address" value={address} />
      <input {...props} placeholder="Email" name="email" value={email} />
      <input {...props} placeholder="Phone" name="phone" value={phone} />
      <input
        {...props}
        placeholder="LinkedIn"
        name="linkedIn"
        value={linkedIn}
      />
      <input {...props} placeholder="GitHub" name="gitHub" value={gitHub} />
    </>
  );
}

export default Personal;
