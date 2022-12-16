import { shopsObjectsObjToArr } from '../components/helpers';
import useFetch from '../components/hooks/UseFetch';
import SingleShop from '../components/shops/SingleShop';

function ShopsPage(props) {
  const url = `${import.meta.env.VITE_REAL_DB_URL}/shops.json`;
  const [shopsData, setShopsData] = useFetch(url, {});
  const shopsArr = shopsObjectsObjToArr(shopsData);

  return (
    <div className="container">
      <h2>ShopsPage</h2>

      {shopsArr.map((shopObj) => (
        <SingleShop key={shopObj.id} obj={shopObj} />
      ))}
    </div>
  );
}
export default ShopsPage;
