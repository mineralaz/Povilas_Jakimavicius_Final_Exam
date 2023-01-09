import css from './FormDescription.module.css';

function FormDescription(props) {
  return (
    <div className={css.formDesc}>
      <h3>{props.formAction}</h3>
      <p>{props.children}</p>
    </div>
  );
}
export default FormDescription;
