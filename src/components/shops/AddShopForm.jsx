import { useFormik } from 'formik';
import * as Yup from 'yup';
import { sendPostRequest } from '../helpers';

function AddShopForm(props) {
  const formik = useFormik({
    initialValues: {
      shopName: '',
      town: '',
      startYear: '',
      description: '',
      imageUrl: '',
    },
    validationSchema: Yup.object().shape({
      shopName: Yup.string()
        .min(4, 'Too short. Min 4 symbols')
        .required('required field'),
      town: Yup.string()
        .min(4, 'Too short. Min 4 symbols')
        .required('required field'),
      startYear: Yup.number()
        .min(1970, 'Start year must be greater than or equal to 1970')
        .max(2022, 'Start year must be less than or equal to 2022')
        .required('required field'),
      description: Yup.string()
        .min(6, 'Too short. Min 6 symbols')
        .required('required field'),
      imageUrl: Yup.string()
        .min(5, 'Too short. Min 5 symbols')
        .required('required field'),
    }),
    onSubmit: async (values) => {
      console.log('values ===', values);
      const url = `${import.meta.env.VITE_REAL_DB_URL}/shops.json`;
      const [response, error] = await sendPostRequest(values, url);
      console.log('response ===', response);
      console.log('error ===', error);
      formik.resetForm();
    },
  });
  return (
    <div>
      <h2>Add Shop</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="shopName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.shopName}
          placeholder="Shop name"
        />
        {formik.touched.shopName && formik.errors.shopName && (
          <p>{formik.errors.shopName}</p>
        )}
        <input
          type="text"
          name="town"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.town}
          placeholder="Town"
        />
        {formik.touched.town && formik.errors.town && (
          <p>{formik.errors.town}</p>
        )}
        <input
          type="year"
          name="startYear"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.startYear}
          placeholder="Start Year"
        />
        {formik.touched.startYear && formik.errors.startYear && (
          <p>{formik.errors.startYear}</p>
        )}
        <textarea
          type="text"
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          placeholder="Description..."
        ></textarea>
        {formik.touched.description && formik.errors.description && (
          <p>{formik.errors.description}</p>
        )}
        <input
          type="text"
          name="imageUrl"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.imageUrl}
          placeholder="Image url"
        />
        {formik.touched.imageUrl && formik.errors.imageUrl && (
          <p>{formik.errors.imageUrl}</p>
        )}
        <button type="submit">Add Shop</button>
      </form>
    </div>
  );
}
export default AddShopForm;
