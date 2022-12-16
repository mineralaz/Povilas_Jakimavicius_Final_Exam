import { useState } from 'react';
import { useAuthCtx } from '../../store/AuthContext';
import { shopsObjectsObjToArr } from '../helpers';
import useFetch from '../hooks/UseFetch';
import SingleShop from '../shops/SingleShop';

function AllShops(props) {
  const { loading } = useAuthCtx();
  const url = `${import.meta.env.VITE_REAL_DB_URL}/shops.json`;
  const [shopsData, setShopsData] = useFetch(url, {});
  const shopsArr = shopsObjectsObjToArr(shopsData);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && (
        <ul>
          {shopsArr.map((shopObj) => (
            <SingleShop key={shopObj.id} obj={shopObj} />
          ))}
        </ul>
      )}
    </>
  );
}
export default AllShops;
