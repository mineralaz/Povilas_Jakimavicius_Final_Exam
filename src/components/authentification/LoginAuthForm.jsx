import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuthCtx } from '../../store/AuthContext';
import { sendPostRequest } from '../helpers';
import { useHistory } from 'react-router-dom';
import Input from '../UI/Input';
import { failNotify, successNotify } from '../toasts/toasts';
import css from './LoginAuthForm.module.css';

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
    <div>
      <form onSubmit={formik.handleSubmit} className={css.loginForm}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default LoginAuthForm;
