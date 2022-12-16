function Input({ touched, error, textarea, ...rest }) {
  return (
    <>
      {!textarea && <input {...rest} />}
      {textarea && <textarea {...rest}></textarea>}
      {touched && error && <p>{error}</p>}
    </>
  );
}
export default Input;
