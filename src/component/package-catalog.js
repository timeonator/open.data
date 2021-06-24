import { useTable } from "react-table";
import '../App.css';

const PackageCatalog = () => {
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
    const data = [
        {
        _id:"60d226e8b5efc85ef8286a39",
        name:"absolute",
        title:"The Absolute Truth",
        licenses:"MIT",
        sources:"Rpbert Gifford",
        resources:"absolute.csv",
        },
    ]

    
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
    return(

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
    )
}
export default PackageCatalog