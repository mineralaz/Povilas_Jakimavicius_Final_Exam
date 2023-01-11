import css from './FormDescription.module.css';

function FormDescription(props) {
  return (
    <div
      className={
        props.right ? `${css.formDesc} ${css.alignRight}` : css.formDesc
      }
    >
      <h3>{props.formName}</h3>
      <p>{props.children}</p>
    </div>
  );
}
export default FormDescription;
