import React, {useState} from 'react';// {
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


    var data = {
        "name": name,
        "title": title,
        "license": license,
        "sources": [ sources ],
        "resources": [ resources ],
        "id": id,
    }
    var handleSubmit = () => {
        console.log(data);
    }
     return(
        <>
        Id:  <input type="text" value={id} onChange={e => setId(e.target.value)} />
        Name:  <input type="text" value={name} onChange={e => setName(e.target.value)}/> 
        Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
        Licenses: <input type="text" value={license} onChange={e => setLicense(e.target.value)}/>
        Sources: <input type="text" value={sources} onChange={e => setSources(e.target.value)}/> 
        Resources: <input type="text" value={resources} onChange={e => setResources(e.target.value)}/>
        <button name="Submit" onClick= {handleSubmit} />
        </>
  )
}
export default DataPackage;