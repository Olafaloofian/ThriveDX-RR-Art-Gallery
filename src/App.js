import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import Gallery from './Components/Gallery.jsx'
import ButtonBar from './Components/ButtonBar.jsx'

function App() {
  let [artId, setArtId] = useState(190735)
  let [data, setData] = useState({})

  useEffect(() => {
    
    console.log("useEffect runs")
    document.title = "Welcome to ArtWorld"

    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))

  }, [artId])

  const handleIterate = e => {
    setArtId(artId + Number(e.target.value))
  }

  return (
    <div className="App">
      <Gallery data={data}/>
      <ButtonBar handleIterate={handleIterate}/>
    </div>
  );
}

export default App;
