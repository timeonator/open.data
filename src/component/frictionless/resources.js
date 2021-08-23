import React from 'react';
import Table from '../table';

const columns = [
  { accessor: 'name', Header: 'Name' },
  { accessor: 'path', Header: 'Path' },
  { accessor: 'title', Header: 'Title' },
];

const data = [
  {
    name: 'solar-system',
    path: 'http://example.com/solar-system.csv',
    title: 'The Solar System',
  },
];

const Resources = (props) => {
  return (
    <>
      <h4>Resources</h4>
      <Table columns={columns} data={data} />
    </>
  );
};
export default Resources;
