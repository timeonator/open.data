import React, {useState, useEffect } from 'react';
//import ReactDataGrid from 'react-data-grid';
import { useTable } from "react-table";
const cloneDeep = require('lodash/clonedeep');
import './../App.css';

const PackageCatalog = (props) => {
    const columns = React.useMemo(
        () => [
          {
            Header: 'ID',
            accessor: '_id', 
          },
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Title',
            accessor: 'title',
          },
        ],
        []
      )

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
                .then((d) => d.json())
                .then(setData)
                .then(() => setLoading(false))
                .catch((error) => setError);   
        }, [uri]); 
    
        var result = { loading, data, error };
        return result;
    }



    const uri = "http://localhost:8000/datapackages"
    const { loading, data, error } = useFetch(uri);
    if (loading) return <h1>loading ...</h1>;
    if (error) return <pre>Error: {data}</pre>;
   var deepData = cloneDeep(JSON.stringify(data));
    // var deepData = cloneDeep(data);

    console.log(deepData);



    return(
      <div>
          <pre>{deepData}</pre>
      </div>
  );
}
export default PackageCatalog