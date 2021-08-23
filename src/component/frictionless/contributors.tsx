//
// "contributors": [{
//     "title": "Joe Bloggs",
//     "email": "joe@bloggs.com",
//     "path": "http://www.bloggs.com",
//     "role": "author"
//   }]

import React from 'react';
import Table from '../table';

interface Heading {
  accessor: string;
  Header: string;
}

const columns: Array<Heading> = [
  { accessor: 'title', Header: 'Title' },
  { accessor: 'email', Header: 'Email' },
  { accessor: 'path', Header: 'Path' },
  { accessor: 'role', Header: 'Role' },
];

interface contributor {
  title: String;
  email: String;
  path: String;
  role: String;
}

const data: Array<contributor> = [
  {
    title: 'Department Head',
    email: 'TomClancy@gmail.com',
    path: '/road/to/no/where',
    role: 'research ninja',
  },
];

const Contributors = () => {
  return (
    <>
      <h4>Contributors</h4>;
      <Table data={data} columns={columns} />;
    </>
  );
};
export default Contributors;
