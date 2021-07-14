import React, {useState, useEffect } from 'react';
import { useTable } from "react-table";
import '../App.css';


const PackageCatalog = () => {
    const [data, setData]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(false);

    useEffect(() => {
        fetch("http://localhost:8000/datapackages",{
            method: 'GET',
            accept: 'application/json',
            mode: 'cors',
            cache: 'default',
        })
        .then(response => {
            if (response.ok) { return response.json() }
            throw response;
        }).then(data => {
            setData(data);
        }).catch(error => {
            setError(error);
            console.log("Error fetching Data: ", error);
        })
            .finally(()=> {setLoading(false)});
      },[]);

    const columns = [
        {
          Header: "ID",
          accessor: "_id",
        },
        {
          Header: "Name",
          accessor: "name",
        },
        {
          Header: "Title",
          accessor: "title",
        },
      ];
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    });

    if(loading) return(<h3>Loading Data ...</h3>);
    if(error) return("<h3> Error</h3>");

    return(
        <>
        <h3>Package Catalog</h3>

        <table {...getTableProps()}>
        <thead>
        {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
            </tr>
        ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
            prepareRow(row);
            return (
            <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
            </tr>
            );
        })}
        </tbody>
    </table>
    </>
    )  



}
export default PackageCatalog