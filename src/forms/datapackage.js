import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Banner from '../banner';

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

var DataPackage = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [license, setLicense] = useState('');
  const [sources, setSources] = useState('');
  const [resources, setResources] = useState('');
  const [id, setId] = useState('');

  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    return response.json(); // parses JSON response into native JavaScript objects
  }

  const handleClick = (e) => {
    const myData = {
      name: name,
      title: title,
      license: license,
      sources: [sources],
      resources: [resources],
      id: id,
    };
    console.log(myData);
    postData('http://localhost:8000/datapackage', myData);
  };
  return (
    <>
      <Container classname="container data-package">
        <Banner title="Datapackage Metadata Form" />
        <Row className="container">
          Id:{' '}
          <input
            type="text"
            value={id}
            size="lg"
            onChange={(e) => setId(e.target.value)}
          />
        </Row>
        <Row className="container">
          Name:{' '}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Row>
        <Row className="container">
          Title:{' '}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Row>
        <Row className="container">
          Licenses:{' '}
          <input
            type="text"
            value={license}
            onChange={(e) => setLicense(e.target.value)}
          />
        </Row>
        <Row className="container">
          Sources:{' '}
          <input
            type="text"
            value={sources}
            onChange={(e) => setSources(e.target.value)}
          />
        </Row>
        <Row className="container">
          Resources:{' '}
          <input
            type="text"
            value={resources}
            onChange={(e) => setResources(e.target.value)}
          />
        </Row>
        <Row className="container">
          <Button onClick={handleClick}>Submit</Button>
        </Row>
      </Container>
    </>
  );
};
export default DataPackage;
