import AddShopForm from '../components/shops/AddShopForm';
import PageTitle from '../components/UI/PageTitle';

function AddShopPage(props) {
  return (
    <div className="container">
      <PageTitle>Add your shop to our list</PageTitle>
      <AddShopForm />
    </div>
  );
}
export default AddShopPage;
