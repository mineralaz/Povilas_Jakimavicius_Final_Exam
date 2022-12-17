import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { sendPostRequest } from '../helpers';
import { failNotify, successNotify } from '../toasts/toasts';
import Input from '../UI/Input';
import css from './RegisterAuthForm.module.css';

function RegisterAuthForm(props) {
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
      const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
        import.meta.env.VITE_API_KEY
      }`;
      const [response, error] = await sendPostRequest(values, url);

      if (error) return failNotify(error.error.message);

      successNotify('Regitered succesfully');
      history.push('/login');
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={css.registerForm}>
        <Input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="email"
          touched={formik.touched.email}
          error={formik.errors.email}
        />
        <Input
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="password"
          touched={formik.touched.password}
          error={formik.errors.password}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
export default RegisterAuthForm;
