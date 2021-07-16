import React, {useState, useEffect } from 'react';
import { useTable } from "react-table";
const cloneDeep = require('lodash/clonedeep');
import '../App.css';

function useFetch(uri) {
  const [data, setData] = useState([]);
  var [loading, setLoading] = useState(true);
  var [error, setError] = useState(false);

  useEffect(() => {
    if (!uri) return;

    fetch(uri,{
        method: 'GET',
        accept: 'application/json',
        mode: 'cors',
        cache: 'default',
    })
        .then((data) => data.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch((error) => setError);   
  }, [uri]); 
    
    var result = { loading, data, error };
    return result;
}


const PackageCatalog = (props) => {
    const uri = "http://localhost:8000/datapackages"
    const { loading, data, error } = useFetch(uri);
 

  if (loading) return <h1>loading ...</h1>;
  if (error) return <pre>Error: {data}</pre>;
  var deepData = cloneDeep(data);
  console.log(deepData);
  return (
    <div>
      <pre>Success: {JSON.stringify(deepData)}</pre>
    </div>
  )
}
export default PackageCatalog