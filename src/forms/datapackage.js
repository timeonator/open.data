import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
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
        const [name, setName]=useState("");
        const [title,setTitle]=useState("")
        const [license, setLicense]=useState("")
        const [sources, setSources]=useState("")
        const [resources, setResources]=useState("")
        const [id, setId]=useState("")       


    const myData = {
        "name": name,
        "title": title,
        "license": license,
        "sources": [ sources ],
        "resources": [ resources ],
        "id": id,
    }
    const handleClick = (e) => {
        const myData = {
            "name": name,
            "title": title,
            "license": license,
            "sources": [ sources ],
            "resources": [ resources ],
            "id": id,
        }
        console.log(myData)
    }
     return(
        <Container>
        <Banner title='Datapackage Metadata Form' />
        <Row className='container'>
        Id:  <input 
            type="text" 
            value={id}
            size='lg' 
            onChange={e => setId(e.target.value)}
        />
        </Row>
        <Row className='container'>
        Name:  <input type="text"
            value={name} 
            onChange={e => setName(e.target.value)}
        />
        </Row>
        <Row className='container'>
        Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
        </Row>
        <Row className='container'>
        Licenses: <input type="text" value={license} onChange={e => setLicense(e.target.value)}/>
        </Row>
        <Row className='container'>
        Sources: <input type="text" value={sources} onChange={e => setSources(e.target.value)}/> 
        </Row>
        <Row className='container'>
        Resources: <input type="text" value={resources} onChange={e => setResources(e.target.value)}/>
        </Row>



        <Row className='container'>
        <Button onClick={handleClick} >
            Submit
        </Button></Row>
        </Container>

  )
}
export default DataPackage;