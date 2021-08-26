//import Resource from './resources';
// {
//     # general "metadata" like title, sources etc
//     "name" : "a-unique-human-readable-and-url-usable-identifier",
//     "title" : "A nice title",
//     "licenses" : [ ... ],
//     "sources" : [...],
//     # list of the data resources in this data package
//     "resources": [
//       {
//         ... resource info described below ...
//       }
//     ],
//     # optional
//     ... additional information ...
//   }

//
// Frictionless Dataset Descriptor
interface descriptor {
  name: String;
  title: String;
  //  resources: Array<typeof Resource>;
  //   licenses: licenses;
  //   contributors: contributors;
}
const Discriptor = (props) => {
  return <h3>Discriptor</h3>;
};
export default Discriptor;
