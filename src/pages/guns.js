import * as React from 'react'

//component import
import Main from '../components/main';

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
    <Main>
      <div style={gunMainStyles}>
        <h1>Guns</h1>
      </div>
    </Main>
  );
}

export default Guns;