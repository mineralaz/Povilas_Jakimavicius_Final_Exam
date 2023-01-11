import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuthCtx } from '../../store/AuthContext';
import { sendPostRequest } from '../helpers';
import { useHistory } from 'react-router-dom';
import Input from '../UI/Input';
import { failNotify, successNotify } from '../toasts/toasts';
import css from './LoginAuthForm.module.css';
import Button from '../UI/Button';
import FormDescription from '../UI/FormDescription';

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
      if (error) {
        if (error.error.message === 'EMAIL_NOT_FOUND')
          failNotify('Invalid email or password');
        else if (error.error.message === 'INVALID_PASSWORD')
          failNotify('Invalid email or password');
      }

      ctx.login(response.idToken);
      history.push('/shops');
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
      <FormDescription formName="Please login">
        Only by logging in you will be able to see our sponsored shops or even
        add yours
      </FormDescription>
    </div>
  );
}
export default LoginAuthForm;
