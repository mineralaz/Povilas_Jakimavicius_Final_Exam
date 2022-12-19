import css from './Button.module.css';

function Button(props) {
  return (
    <button className={css.btn} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
export default Button;
