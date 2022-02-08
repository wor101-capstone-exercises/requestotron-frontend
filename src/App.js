import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NewBinButton from './components/NewBinButton';
import ListOfBins from './components/ListOfBins';
import Requests from './components/Requests';
import './App.css';

const baseURL = process.env.REACT_APP_NODE_ENV === 'development' 
                ? process.env.REACT_APP_DEV_BASE_URL 
                : process.env.REACT_APP_PROD_BASE_URL;

function App() {
  const [binList, setBinList] = useState([]);
  const [binContents, setBinContents] = useState([])

  const updateBinList = async () => {
    try {
      const response = await axios.get(baseURL + 'bin');
      const urls = response.data.map(urlObj => urlObj.url);
      setBinList(urls);
    } catch (err) {
      console.log(err)
      setBinList([])
    }
  };

  useEffect(() => {
    updateBinList();
  },[]);

  return (
    <div className="body">
      <h1 className="header">Requestotron 5000</h1>
      <NewBinButton className="binList" updateBinList={updateBinList} />
      <div className="binSection">
        <ListOfBins binList={binList} setBinContents={setBinContents} />
        <Requests className="requests" binContents={binContents} />
      </div>
    </div>
  );
};

export default App;
