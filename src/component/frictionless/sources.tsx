import Table from '../table';

interface Heading {
  accessor: string;
  Header: string;
}
interface Data {
  path: string;
  title: string;
}

const columns: Array<Heading> = [
  { accessor: 'path', Header: 'Path' },
  { accessor: 'title', Header: 'Title' },
];

const data: Array<Data> = [
  {
    path: 'piktographic.com',
    title: 'Tech Lead',
  },
  {
    title: 'World Bank and OECD',
    path: 'http://data.worldbank.org/indicator/NY.GDP.MKTP.CD',
  },
];

const Sources = () => {
  return (
    <>
      <h3>Sources</h3>;
      <Table data={data} columns={columns} />
    </>
  );
};
export default Sources;
