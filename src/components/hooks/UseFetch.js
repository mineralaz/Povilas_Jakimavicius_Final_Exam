import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthCtx } from '../../store/AuthContext';

function useFetch(url, initVal) {
  const [data, setData] = useState(initVal);
  const { loadingFn } = useAuthCtx();
  useEffect(() => {
    loadingFn(true);
    fetch(url)
      .then((resp) => resp.json())
      .then((gotData) => setData(gotData))
      .catch((err) => console.warn('useFetch klaida', err))
      .finally(() => loadingFn(false));
  }, []);
  return [data, setData];
}

export default useFetch;
