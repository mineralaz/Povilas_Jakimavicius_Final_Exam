import { useFormik } from 'formik';
import * as Yup from 'yup';

function RegisterAuthForm(props) {
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
    onSubmit: (values) => {
      console.log('values ===', values);
    },
  });
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="email"
        />
        {formik.touched.email && formik.errors.email && (
          <p>{formik.errors.email}</p>
        )}
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="password"
        />
        {formik.touched.password && formik.errors.password && (
          <p>{formik.errors.password}</p>
        )}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
export default RegisterAuthForm;
