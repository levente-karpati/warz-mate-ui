import * as React from 'react'
import '../layouts/main.css'

//image import
import homeImg from '../images/homepageimg.png'

//component import
import Main from '../components/main';

//home main content styling
const homeStyles = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
//home image styling
const homeImgStyles = {
  position: 'absolute',
  left: '0px',
  bottom: '0px',
  maxWidth:'350px',
  maxHeight:'350px',
  width: 'auto',
  height: 'auto'
}

function App() {
  return (
    <Main>
      <div style={homeStyles}>
        <h1>warz-mate</h1>
      </div>
      <img style={homeImgStyles} alt='silouhette of military personnel' src={homeImg}/>
    </Main>
  );
}

export default App;