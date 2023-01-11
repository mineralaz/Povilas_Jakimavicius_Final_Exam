import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { sendPostRequest } from '../helpers';
import { failNotify, successNotify } from '../toasts/toasts';
import Button from '../UI/Button';
import FormDescription from '../UI/FormDescription';
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

      if (error) {
        if ((error.error.message = 'EMAIL_EXISTS'))
          return failNotify('Email is already in use');
      }

      successNotify('Regitered succesfully');
      formik.resetForm();
      setTimeout(() => history.push('/login'), 1500);
    },
  });
  return (
    <div className={css.regContainer}>
      <FormDescription formName="Please register" right>
        Only registered users are able to see our sponsored shops or even add
        their own shop to be sponsored
      </FormDescription>

      <form onSubmit={formik.handleSubmit} className={css.registerForm}>
        <h3>Register</h3>
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
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
}
export default RegisterAuthForm;
