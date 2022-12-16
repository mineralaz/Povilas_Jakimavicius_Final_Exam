import { useState } from 'react';
import { shopsObjectsObjToArr } from '../helpers';
import useFetch from '../hooks/UseFetch';
import SingleShop from '../shops/SingleShop';

function AllShops(props) {
  const url = `${import.meta.env.VITE_REAL_DB_URL}/shops.json`;

  const [shopsData, setShopsData] = useFetch(url, {});
  const shopsArr = shopsObjectsObjToArr(shopsData);

  return (
    <ul>
      {shopsArr.map((shopObj) => (
        <SingleShop key={shopObj.id} obj={shopObj} />
      ))}
    </ul>
  );
}
export default AllShops;
