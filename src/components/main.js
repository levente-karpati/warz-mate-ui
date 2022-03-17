import * as React from 'react';

//component imports
import Navbar from "../components/navbar"

//main container styling
const mainStyles = {
    width: '100%',
    height: '100vh'
}

//content container styling
const contentStyles = {
  width: '100%',
  height: '95vh'
}

//component acts as a container for every page, including navbar and content layout
export default function Main({ children }) {
  return (
    <div style={mainStyles}>
      <Navbar></Navbar>
      <div style={contentStyles}>
        {children}
      </div>
    </div>
  )
}