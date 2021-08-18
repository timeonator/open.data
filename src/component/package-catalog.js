import React, { useState, useEffect } from 'react';
import DataPackage from './data-package';
//import ReactDataGrid from 'react-data-grid';
import './../App.css';

const PackageCatalog = (props) => {
  function useFetch(uri) {
    console.log('useFetch is starting');

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
      let cancel = false;
      if (!uri) return;
      console.log('useEffect is starting');
      fetch(uri, {
        method: 'GET',
        accept: 'application/json',
        mode: 'cors',
        cache: 'default',
      })
        .then((res) => {
          if (cancel === true) return;
          else return res;
        })
        .then((d) => d.json())
        .then((d) => {
          setData(d);

          setLoading(false);
        })
        .catch((error) => {
          console.log('Error while fetching catalog list: ', error);
          setError(true);
        });

      return () => {
        console.log('cleanup');
        cancel = true;
      };
    }, [uri]);

    const result = { loading, data, error };
    return result;
  }

  const uri = 'http://localhost:8000/datapackages';
  const { loading, data, error } = useFetch(uri);

  if (loading === true) return <h1>loading ...</h1>;
  if (error === true) return <pre>Error: {data}</pre>;
  return <DataPackage data={data} />;
};
export default PackageCatalog;
