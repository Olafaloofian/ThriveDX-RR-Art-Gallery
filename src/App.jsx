import './App.css';
import ButtonBar from './Components/ButtonBar'
import Gallery from './Components/Gallery'
import { useState, useEffect } from 'react'

function App() {
  let [artId, setArtId] = useState(Math.floor(Math.random() * (471581 - 1 + 1)) + 1)
  let [data, setData] = useState({})

  useEffect(() => {
    document.title = 'Welcome to ArtWorld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
  }, [artId])

  const handleIterate = e => {
    if(artId + Number(e.target.value) > 471581) {
      setArtId(471581)
    } else if (artId + Number(e.target.value) < 1) {
      setArtId(1)
    } else {
      setArtId(artId + Number(e.target.value))
    }
  }

  return (
    <div className="App">
      <Gallery primaryImage={data.primaryImage} title={data.title} artist={data.artistDisplayName} medium={data.medium} />
      <ButtonBar handleIterate={handleIterate}/>
    </div>
  );
}

export default App;
