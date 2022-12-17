import css from './Input.module.css';

function Input({ touched, error, textarea, ...rest }) {
  return (
    <div>
      {!textarea && <input {...rest} autoComplete="off" />}
      {textarea && <textarea {...rest}></textarea>}
      {touched && error && <p className={css.errMsg}>{error}</p>}
    </div>
  );
}
export default Input;
