import { Link } from 'react-router-dom';
import LoginAuthForm from '../components/authentification/LoginAuthForm';
import PageTitle from '../components/UI/PageTitle';
import css from './NotAuthorisedPage.module.css';

function NotAuthorisedPage(props) {
  return (
    <div className="container">
      <PageTitle>For registered or logged in users only</PageTitle>
      <LoginAuthForm />
      <p className={css.regText}>
        Don't have an account?{' '}
        <Link className={css.regText_link} to="/register">
          Register Here
        </Link>
      </p>
    </div>
  );
}
export default NotAuthorisedPage;
