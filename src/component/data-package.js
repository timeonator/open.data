import React, { useMemo } from 'react';
import Table from './table';
import '../styles/global.css';

const DataPackage = (props) => {
  const columns = useMemo(
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
  );
  const data = props.data;
  return (
    <>
      <Table columns={columns} data={data} />
    </>
  );
};

export default DataPackage;
