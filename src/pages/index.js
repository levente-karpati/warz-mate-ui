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
//home main content styling
const homeStyles = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

function App() {
  return (
    <div style={mainStyles}>
      <Navbar></Navbar>
      <Content>
        <div style={homeStyles}>
            <h1>Home</h1>
        </div>
      </Content>
    </div>
  );
}

export default App;