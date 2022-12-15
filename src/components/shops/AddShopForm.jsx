import { useFormik } from 'formik';
import * as Yup from 'yup';

function AddShopForm(props) {
  const formik = useFormik({
    initialValues: {
      shopName: '',
      // input - (stringas, minimum 4 simboliai, privalomas laukas )
      town: '',
      // input - (stringas, minimum 4 simboliai, privalomas laukas )
      startYear: '',
      // input (skaicius, 4 simboliai, min 1970, max 2022, privalomas laukas)
      description: '',
      // textarea - (stringas, mažiausiai 6 simboliai privalomas laukas)
      ImageUrl: '',
      // input (stringas, min 5, privalomas)
    },
    validationSchema: Yup.object().shape({
      shopName: Yup.string().min(4, 'Too short. Min 4 symbols').required(),
      town: Yup.string().min(4, 'Too short. Min 4 symbols').required(),
      startYear: Yup.number()
        .min(1970, 'Start year must be greater than or equal to 1970')
        .max(2022, 'Start year must be less than or equal to 2022')
        .required(),
      description: Yup.string().min(6, 'Too short. Min 6 symbols').required(),
      ImageUrl: Yup.string().min(5, 'Too short. Min 5 symbols').required(),
    }),
    onSubmit: (values) => {
      console.log('values ===', values);
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
          placeholder="Shop name"
        />
        {formik.errors.shopName && <p>{formik.errors.shopName}</p>}
        <input
          type="text"
          name="town"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Town"
        />
        {formik.errors.town && <p>{formik.errors.town}</p>}
        <input
          type="year"
          name="startYear"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Start Year"
        />
        {formik.errors.startYear && <p>{formik.errors.startYear}</p>}
        <textarea
          type="text"
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Description..."
        ></textarea>
        {formik.errors.description && <p>{formik.errors.description}</p>}
        <input
          type="text"
          name="ImageUrl"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Image url"
        />
        {formik.errors.ImageUrl && <p>{formik.errors.ImageUrl}</p>}
        <button type="submit">Add Shop</button>
      </form>
    </div>
  );
}
export default AddShopForm;
