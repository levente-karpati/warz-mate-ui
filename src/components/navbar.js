import * as React from 'react';

//navbar container styling
const navStyles = {
    width: '100%',
    height: '5vh',
    minHeight: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
}
//navbar item styling
const navItemStyles = {
    width: '33.33%',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111111'
}

const Navbar = () => {
    return (
        <div style={navStyles}>
            <div style={navItemStyles}>
                <p>Home</p>
            </div>
            <div style={navItemStyles}>
                <p>News</p>
            </div>
            <div style={navItemStyles}>
                <p>Guns</p>
            </div>
        </div>
    )
}

export default Navbar