import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import Gallery from './Components/Gallery.jsx'
import ButtonBar from './Components/ButtonBar.jsx'

function App() {
  let [artId, setArtId] = useState(190735)
  let [data, setData] = useState({})
  let [userInput, setUserInput] = useState("")

  useEffect(() => {
    
    console.log("useEffect runs")
    document.title = "Welcome to ArtWorld"

    getArtData(artId)

  }, [artId])

  const getArtData = (id) => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
    .then(response => response.json())
    .then(resData => setData(resData))
  }

  const handleIterate = e => {
    setArtId(artId + Number(e.target.value))
  }

  const handleChange = e => {
    setUserInput(e.target.value)
  }

  return (
    <div className="App">
      <Gallery data={data}/>
      <div className="user-input">
        <input type="text" onChange={handleChange} placeholder="Enter art id"/>
        <button onClick={() => getArtData(userInput)}>Submit</button>
      </div>
      <ButtonBar handleIterate={handleIterate}/>
    </div>
  );
}

export default App;
