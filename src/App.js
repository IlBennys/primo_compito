import React from "react"
import "./App.css"
import ButtonComponents from "./components/ButtonComponents"
import ImageComponents from "./components/ImageComponent"

function App() {
  return (
    <header id="piePagina">
      <h1>ciao</h1>
      <div></div>
      <ButtonComponents colore="red" coloreDue="green" />
      <ImageComponents
        link="https://media-cdn.tripadvisor.com/media/photo-s/1b/f4/56/f1/aerial-view.jpg"
        spiegazione="pic"
        grandezza="300"
      />
    </header>
  )
}

export default App
