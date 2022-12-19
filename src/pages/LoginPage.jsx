import LoginAuthForm from '../components/authentification/LoginAuthForm';
import PageTitle from '../components/UI/PageTitle';

function LoginPage(props) {
  return (
    <div className="container">
      <PageTitle>Login</PageTitle>
      <LoginAuthForm />
    </div>
  );
}
export default LoginPage;
