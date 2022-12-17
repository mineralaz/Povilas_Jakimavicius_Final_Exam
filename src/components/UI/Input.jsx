import css from './Input.module.css';

function Input({ touched, error, textarea, placeholder, ...rest }) {
  return (
    <div>
      <p className={css.inpName}> {placeholder}</p>
      {!textarea && (
        <input {...rest} placeholder={placeholder} autoComplete="off" />
      )}
      {textarea && <textarea {...rest} placeholder={placeholder}></textarea>}
      {touched && error && <p className={css.errMsg}>{error}</p>}
    </div>
  );
}
export default Input;
