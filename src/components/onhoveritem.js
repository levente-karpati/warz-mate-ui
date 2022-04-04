import * as React from 'react';
import styled from "styled-components"

//use styled component to get on hover
const OnHover = styled(props => <p {...props} />)`
    &:hover{
        cursor: pointer;
        font-size: 1.2em;
    }
`;

export default OnHover;