import * as React from 'react'
import '../layouts/main.css'

//component imports
import Navbar from "../components/navbar"

//responsive container size to view width/height
const mainStyles = {
  minHeight: '100vh',
  minWidth: '100vw'
}

function App() {
  return (
    <div style={mainStyles}>
      <Navbar></Navbar>
    </div>
  );
}

export default App;