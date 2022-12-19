import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuthCtx } from '../../store/AuthContext';
import { sendPostRequest } from '../helpers';
import { useHistory } from 'react-router-dom';
import Input from '../UI/Input';
import { failNotify, successNotify } from '../toasts/toasts';
import css from './LoginAuthForm.module.css';
import Button from '../UI/Button';

function LoginAuthForm(props) {
  const ctx = useAuthCtx();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required('required field'),
      password: Yup.string()
        .min(6, 'Too short. Min length 6 symbols')
        .required('required field'),
    }),
    onSubmit: async (values) => {
      const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
        import.meta.env.VITE_API_KEY
      }`;
      const [response, error] = await sendPostRequest(values, url);
      if (error) return failNotify(error.error.message);

      ctx.login(response.idToken);
      successNotify('Login success');
      history.push('/');
    },
  });
  return (
    <div className={css.loginContainer}>
      <form onSubmit={formik.handleSubmit} className={css.loginForm}>
        <h3>Login</h3>
        <Input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Email"
          touched={formik.touched.email}
          error={formik.errors.email}
        />
        <Input
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Password"
          touched={formik.touched.password}
          error={formik.errors.password}
        />
        <Button type="submit">Login</Button>
      </form>
      <div className={css.loginDesc}>
        <h4>Please login</h4>
        <p>
          Only by logging in you will be able to see our <br /> sponsored shops
          or even add yours
        </p>
      </div>
    </div>
  );
}
export default LoginAuthForm;
