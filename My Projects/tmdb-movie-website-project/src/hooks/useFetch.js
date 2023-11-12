
/* 
   useFetch genellikle veri alisverisi (HTTP istekleri gibi) yapmak icin kullanilir
   Bu hook, ozellikle fetch API'sini kullanarak veri alisverisi gerceklesitirmek icin tasarlanmistir.
   Raconu bozma.

   Bir ornek

   import { useState, useEffect } from 'react';

   const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

   }
*/


import { useState, useEffect} from 'react';
import { fetchDataFromApi } from '../utils/api';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null)
    

    useEffect(() => {
      setLoading("Loading...");
      setData(null);
      setError(null);

      fetchDataFromApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong");
      })
    }, [url])
    
  return {data, loading, error};
}

export default useFetch