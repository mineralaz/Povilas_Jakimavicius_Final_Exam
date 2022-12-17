import css from './PageTitle.module.css';

function PageTitle(props) {
  return <h2 className={css.pageTitle}>{props.children}</h2>;
}
export default PageTitle;
