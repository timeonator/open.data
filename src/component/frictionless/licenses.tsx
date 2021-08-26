// "licenses": [{
//     "name": "ODC-PDDL-1.0",
//     "path": "http://opendatacommons.org/licenses/pddl/",
//     "title": "Open Data Commons Public Domain Dedication and License v1.0"
//   }]
import React from 'react';
import Table from '../table';

interface Heading {
  accessor: string;
  Header: string;
}

export interface License {
  name: string;
  path: string;
  title: string;
}

const columns: Array<Heading> = [
  { accessor: 'name', Header: 'Name' },
  { accessor: 'path', Header: 'Path' },
  { accessor: 'title', Header: 'Title' },
];

const data: Array<License> = [
  {
    name: 'ODC-PDDL-1.0',
    path: 'http://opendatacommons.org/licenses/pddl/',
    title: 'Open Data Commons Public Domain Dedication and License v1.0',
  },
];

const Licenses = () => {
  return (
    <>
      <h4>Licenses</h4>
      <Table columns={columns} data={data} />
    </>
  );
};
export default Licenses;
