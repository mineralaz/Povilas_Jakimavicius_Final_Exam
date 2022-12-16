import { useFormik } from 'formik';
import * as Yup from 'yup';
import { sendPostRequest } from '../helpers';
import { failNotify, successNotify } from '../toasts/toasts';
import Input from '../UI/Input';

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
      if (error) return failNotify(error.error.message);
      successNotify('Shop was succesfully added');
      formik.resetForm();
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          name="shopName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.shopName}
          placeholder="Shop name"
          touched={formik.touched.shopName}
          error={formik.errors.shopName}
        />
        <Input
          type="text"
          name="town"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.town}
          placeholder="Town"
          touched={formik.touched.town}
          error={formik.errors.town}
        />
        <Input
          type="year"
          name="startYear"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.startYear}
          placeholder="Start Year"
          touched={formik.touched.startYear}
          error={formik.errors.startYear}
        />
        <Input
          textarea
          type="text"
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          placeholder="Description..."
          touched={formik.touched.description}
          error={formik.errors.description}
        />
        <Input
          type="text"
          name="imageUrl"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.imageUrl}
          placeholder="Image url"
          touched={formik.touched.imageUrl}
          error={formik.errors.imageUrl}
        />
        <button type="submit">Add Shop</button>
      </form>
    </div>
  );
}
export default AddShopForm;
