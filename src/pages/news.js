import * as React from 'react'
import '../layouts/main.css'

//component import
import Main from '../components/main';
import Rss from '../components/rss'

function App() {
  return (
    <Main>
      <Rss></Rss>
    </Main>
  );
}

export default App;