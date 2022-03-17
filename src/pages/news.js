import * as React from 'react'

//component import
import Main from '../components/main';

//news main styling
const newsMainStyles = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

function News() {
  return (
    <Main>
      <div style={newsMainStyles}>
        <h1>News</h1>
      </div>
    </Main>
  );
}

export default News;