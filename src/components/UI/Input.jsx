import css from './Input.module.css';

function Input({ touched, error, textarea, ...rest }) {
  return (
    <>
      {!textarea && <input {...rest} />}
      {textarea && <textarea {...rest}></textarea>}
      {touched && error && <p className={css.errMsg}>{error}</p>}
    </>
  );
}
export default Input;
