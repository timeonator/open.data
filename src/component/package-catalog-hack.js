import React, {useState, useEffect, useMemo } from 'react';
//import ReactDataGrid from 'react-data-grid';
import { useTable } from "react-table";
import './../App.css';

const cloneDeep = require('lodash/clonedeep');


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

        console.log("useFetch is starting");

        const [data, setData] = useState([]); 
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(false);
        const [tableInstance,setTableInstance] = useState();

        useEffect(() => {
            let cancel = false;
            if (!uri) return;
            console.log("useEffect is starting");
            fetch(uri,{
                method: 'GET',
                accept: 'application/json',
                mode: 'cors',
                cache: 'default',
            })
                .then((res) => {
                    if(cancel===true) return;
                    else return(res)
                })
                .then((d) => d.json())
                .then(d => {
                    setData(d);

                    setLoading(false)
                })
                .catch((error) => {
                    console.log("Error while fetching catalog list: ", error);
                    setError(true);                        
                })
                
                return (() => {
                    console.log("cleanup");
                    cancel = true;
                });
        }, [uri]);
        let deepData = cloneDeep(JSON.stringify(data));
        let instance =useTable({ columns, deepData }) ;
        setTableInstance(instance)  
        const result = { loading, deepData, tableInstance, error };

        return result;
    }



    const uri = "http://localhost:8000/datapackages"
    const { loading, deepData, tableInstance, error } = useFetch(uri);

    if (loading===true) return <h1>loading ...</h1>;
    if (error===true) return <pre>Error: {deepData}</pre>;

 
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = tableInstance
    return(
      <div>


   <table {...getTableProps()}>
     <thead>
       {// Loop over the header rows
       headerGroups.map(headerGroup => (
         // Apply the header row props
         <tr {...headerGroup.getHeaderGroupProps()}>
           {// Loop over the headers in each row
           headerGroup.headers.map(column => (
             // Apply the header cell props
             <th {...column.getHeaderProps()}>
               {// Render the header
               column.render('Header')}
             </th>
           ))}
         </tr>
       ))}
     </thead>
     {/* Apply the table body props */}
     <tbody {...getTableBodyProps()}>
       {// Loop over the table rows
       rows.map(row => {
         // Prepare the row for display
         prepareRow(row)
         return (
           // Apply the row props
           <tr {...row.getRowProps()}>
             {// Loop over the rows cells
             row.cells.map(cell => {
               // Apply the cell props
               return (
                 <td {...cell.getCellProps()}>
                   {// Render the cell contents
                   cell.render('Cell')}
                 </td>
               )
             })}
           </tr>
         )
       })}
     </tbody>
   </table>
 
      </div>
  );
}
export default PackageCatalog