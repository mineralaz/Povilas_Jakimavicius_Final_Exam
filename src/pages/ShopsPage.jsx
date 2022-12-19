import AllShops from '../components/shops/AllShops';
import PageTitle from '../components/UI/PageTitle';

function ShopsPage(props) {
  return (
    <div className="container">
      <PageTitle>Our sponsored shops</PageTitle>

      <AllShops />
    </div>
  );
}
export default ShopsPage;
