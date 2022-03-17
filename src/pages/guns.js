import * as React from 'react'

//component imports
import Navbar from "../components/navbar"
import Content from '../components/content'

//responsive container size to view width/height
const mainStyles = {
    minHeight: '100vh',
    minWidth: '100vw'
}
//guns main styling
const gunMainStyles = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

function Guns() {
  return (
    <div style={mainStyles}>
      <Navbar></Navbar>
      <Content>
        <div style={gunMainStyles}>
            <h1>Guns</h1>
        </div>
      </Content>
    </div>
  );
}

export default Guns;