import * as React from 'react'
import '../layouts/main.css'

//component imports
import Navbar from "../components/navbar"
import Content from '../components/content'

//responsive container size to view width/height
const mainStyles = {
  minHeight: '100vh',
  minWidth: '100vw'
}

function App() {
  return (
    <div style={mainStyles}>
      <Navbar></Navbar>
      <Content></Content>
    </div>
  );
}

export default App;