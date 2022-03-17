import * as React from 'react'
import '../layouts/main.css'

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

function App() {
  return (
    <Main>
      <div style={homeStyles}>
        <h1>Home</h1>
      </div>
    </Main>
  );
}

export default App;