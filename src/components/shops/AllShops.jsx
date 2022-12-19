import { useAuthCtx } from '../../store/AuthContext';
import { shopsObjectsObjToArr } from '../helpers';
import useFetch from '../hooks/UseFetch';
import SingleShop from '../shops/SingleShop';
import css from './AllShops.module.css';

function AllShops(props) {
  const { loading } = useAuthCtx();
  const url = `${import.meta.env.VITE_REAL_DB_URL}/shops.json`;
  const [shopsData, setShopsData] = useFetch(url, {});
  const shopsArr = shopsObjectsObjToArr(shopsData);
  return (
    <>
      {loading && <p className={css.noShops}>Loading...</p>}
      {!loading && shopsArr.length === 0 && (
        <h2 className={css.noShops}>There are no shops in the list yet</h2>
      )}
      {!loading && (
        <ul className={css.shopList}>
          {shopsArr.map((shopObj) => (
            <SingleShop key={shopObj.id} obj={shopObj} />
          ))}
        </ul>
      )}
    </>
  );
}
export default AllShops;
