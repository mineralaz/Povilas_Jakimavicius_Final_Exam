import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { sendPostRequest } from '../helpers';
import { failNotify, successNotify } from '../toasts/toasts';
import Button from '../UI/Button';
import FormDescription from '../UI/FormDescription';
import Input from '../UI/Input';
import css from './AddShopForm.module.css';

function AddShopForm(props) {
  const history = useHistory();
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
      successNotify('Shop was succesfully added');
      formik.resetForm();
      setTimeout(() => history.push('/shops'), 1500);
    },
  });
  return (
    <div className={css.addShopFormContainer}>
      <FormDescription formName="Feel free to add your shop" right>
        By doing it you will end up getting even more customers
      </FormDescription>
      <form onSubmit={formik.handleSubmit} className={css.addShopForm}>
        <h4>Your shop</h4>
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
        <div className={css.twoInpInline}>
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
            type="number"
            name="startYear"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.startYear}
            placeholder="Start Year"
            touched={formik.touched.startYear}
            error={formik.errors.startYear}
          />
        </div>

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
        <Button type="submit">Add Shop</Button>
      </form>
    </div>
  );
}
export default AddShopForm;
