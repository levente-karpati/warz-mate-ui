import * as React from 'react'
import '../layouts/main.css'

//image import
import homeBackground from '../images/homepage-backgroudbn.jpg'


//component import
import Main from '../components/main';

//home main content styling
const homeStyles = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  fontSize: '2em',
  background: `url(${homeBackground})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
}
const mainTitle = {
  marginTop: '10%'
}
const smallerText = {
  fontSize: '0.5em'
}

function App() {
  return (
    <Main>
      <div style={homeStyles}>
        <h1 style={mainTitle}>WarZ Mate</h1>
        <p style={smallerText}>your warzone companion</p>
      </div>
    </Main>
  );
}

export default App;