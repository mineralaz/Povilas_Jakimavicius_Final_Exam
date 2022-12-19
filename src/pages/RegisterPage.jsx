import RegisterAuthForm from '../components/authentification/RegisterAuthForm';
import PageTitle from '../components/UI/PageTitle';

function RegisterPage(props) {
  return (
    <div className="container">
      <PageTitle>Register</PageTitle>
      <RegisterAuthForm />
    </div>
  );
}
export default RegisterPage;
