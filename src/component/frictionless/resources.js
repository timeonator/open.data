import React from 'react';
import MaterialTable from 'material-table';

const columns = [
  { field: 'name', title: 'Name' },
  { field: 'path', title: 'Path' },
  { field: 'title', title: 'Title' },
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
      <MaterialTable columns={columns} data={data} />
    </>
  );
};
export default Resources;
