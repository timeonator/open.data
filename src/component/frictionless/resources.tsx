import React from 'react';
import Table from '../table';

interface Heading {
  accessor: string;
  Header: string;
}
interface Data {
  name: string;
  path: string;
  title: string;
}

const columns: Array<Heading> = [
  { accessor: 'name', Header: 'Name' },
  { accessor: 'path', Header: 'Path' },
  { accessor: 'title', Header: 'Title' },
];

const data: Array<Data> = [
  {
    name: 'solar-system',
    path: 'http://example.com/solar-system.csv',
    title: 'The Solar System',
  },
];

const Resources = () => {
  return (
    <>
      <h4>Resources</h4>
      <Table columns={columns} data={data} />
    </>
  );
};
export default Resources;
