import * as React from 'react';

//content container styling
const contentStyles = {
    width: '100%',
    height: '95vh'
}

export default function Content({ children }) {
  return (
    <div style={contentStyles}>
      {children}
    </div>
  )
}