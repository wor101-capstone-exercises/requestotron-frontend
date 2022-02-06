import axios from 'axios'
import React, { useState } from 'react'
const baseURL = 'http://requestotron.willrossen.com/'
//const baseURL = 'http://localhost:4000/'


const NewBinButton = ({ binList, setBinList }) => {
  const requestNewBin = async (event) => {
    event.preventDefault();
  
    const response = await axios.post(baseURL + 'bin')
    //const binURL = response.data.url
    const listOfBins = await axios.get(baseURL + 'bin')
    setBinList(listOfBins)
  }

  return (
    <button onClick={requestNewBin}>Request New Bin</button>
  )
}

const ListOfBins = ({ binList,setBinContents }) => {
  const showBin = async (event) => {
    event.preventDefault();
    const binURL = event.target.value;
    const response = await axios.get(baseURL + `bin/${binURL}?inspect`);
    setBinContents(response.data)
  }
  return (
    <ul>
      {binList.map(bin =>
        <li key={bin}>
          <button key={bin} onClick={showBin} value={bin}>{bin}</button>
        </li>        
        )}
    </ul>
  )

}

const Request = ({req}) => {
  const headers = req.headers;
  const bodyString = req.body.toString();
  console.log(bodyString)

  return (

    <div>
      <h3>URL {req.url}</h3>
      <p><b>IP:</b>{JSON.stringify(req.ip)}</p>
      <p><b>Headers:</b>{JSON.stringify(headers)}</p>
      <p><b>Host:</b> {headers.host}</p>
      <p><b>Connection:</b> {headers.connection}</p>
      <p><b>Body:</b>{bodyString}</p>
    </div>
  )
}

const Requests = ({binContents}) => {
  console.log(Array.isArray(binContents))
  binContents.forEach(request => console.log(request))

  return (
    <ul>
      {binContents.map(req => 
        <li key={req.binId}>
          <Request key={req.binId} req={req}/>
        </li>
        )}
    </ul>

  )
}

function App() {
  const [binList, setBinList] = useState([]);
  const [binContents, setBinContents] = useState([])

  return (
    <div>
      <h1>Requestotron 5000</h1>
      <NewBinButton binList={binList} setBinList={setBinList} />
      <ListOfBins binList={binList} setBinContents={setBinContents} />
      <Requests binContents={binContents} />
    </div>
  );
}

export default App;
