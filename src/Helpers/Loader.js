import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
    position; fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;

`;

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

const Spinner = styled()`
    animation: ${rotate} 2s linear infinite;
    height: 4rem;
    width: 4rem;
`;

function Loader() {
    return (
        <Container>
           <Spinner/>
           <h1>Results coming up...</h1>
        </Container>
    )
}

export default Loader
